const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt-nodejs");
const moment = require("moment");
const Joi = require("@hapi/joi");

const {
  Users,
  UserSessions,
  ComplianceProfiles,
  RecruiterProfiles,
  CandidateChangeRequest,
  CandidateComplianceDocumentsChangeRequest,
  CandidateComplianceReferencesChangeRequest,
  CandidateCompliancePoliceCheckChangeRequest,
} = require("../../models");

const { rolesObj, StatusEnum, HttpError } = require("../../common/enums");

module.exports = async (req, res) => {
  validateRequestBody(req.body);

  const user = await Users.findOne({
    where: {
      username: req.body.username.toLowerCase(),
      isActive: true,
      roleId: rolesObj[req.body.role],
    },
    attributes: ["roleId", "password", "id", "username"],
  });

  const encryptPassword = bcrypt.hashSync(req.body.password, process.env.SALT);

  if (!user) throw new HttpError(400, responseMessages.M_17);
  if (encryptPassword != user.password)
    throw new HttpError(400, responseMessages.M_18);

  if (
    user.roleId === rolesObj.recruiter ||
    user.roleId === rolesObj.jobEntry ||
    user.roleId === rolesObj.superRecruiter ||
    user.roleId === rolesObj.restrictedUser ||
    user.roleId === rolesObj.admin
  ) {
    const recruiter = await RecruiterProfiles.findOne({
      where: { userId: user.id },
    });

    const token = jwt.sign(
      {
        userId: user.id,
        roleId: user.roleId,
        profileId: recruiter.id,
        username: `${recruiter.firstName} ${recruiter.lastName}`,
      },
      process.env.SECRET
    );

    const userSession = await UserSessions.create({
      userId: user.id,
      jwtToken: token,
      isLogedIn: true,
      lastLoginTime: new Date(),
    });

    if (userSession) {
      return res.status(200).jsend.success({
        success: true,
        token: token,
        teamId: recruiter.teamId,
        candidateColor: recruiter.candidateColor,
      });
    } else throw new HttpError(500, "User Session Creation Error");
  }
  if (
    user.roleId === rolesObj.compliance ||
    user.roleId === rolesObj.superCompliance
  ) {
    const compliance = await ComplianceProfiles.findOne({
      where: { userId: user.id },
    });

    const token = jwt.sign(
      {
        userId: user.id,
        roleId: user.roleId,
        profileId: compliance.id,
        username: `${compliance.firstName} ${compliance.lastName}`,
      },
      process.env.SECRET
    );

    const userSession = await UserSessions.create({
      userId: user.id,
      jwtToken: token,
      isLogedIn: true,
      lastLoginTime: new Date(),
    });

    if (!userSession) throw new HttpError(500, "User Session Creation Error");

    const lastActive = moment(compliance.lastActiveStatus).format("YYYY-MM-DD");
    const currente_date = moment().format("YYYY-MM-DD");

    // console.log(
    //   "---- compliance.lastActiveStatus < updated_date -------" +
    //     lastActive +
    //     " < " +
    //     currente_date
    // );

    if (lastActive < currente_date) {
      await clearComplianceTaskAssignment(compliance.id);
      await updateComplianceLastActiveStatus(compliance.id);
      res.status(200).jsend.success({
        success: true,
        token: token,
      });
    } else {
      await updateComplianceLastActiveStatus(compliance.id);
      res.status(200).jsend.success({
        success: true,
        token: token,
      });
    }
  }
};

function updateComplianceLastActiveStatus(complianceId) {
  return ComplianceProfiles.update(
    {
      lastActiveStatus: moment().format("YYYY-MM-DD HH:mm"),
    },
    {
      where: {
        id: complianceId,
      },
    }
  );
}

function clearComplianceTaskAssignment(complianceId) {
  return Promise.all([
    CandidateChangeRequest.update(
      {
        AssignTo: null,
      },
      {
        where: {
          AssignTo: complianceid,
        },
      }
    ),

    CandidateComplianceDocumentsChangeRequest.update(
      {
        AssignTo: null,
      },
      {
        where: {
          AssignTo: complianceId,
          isActive: true,
          approvalStatus: StatusEnum.Pending,
        },
      }
    ),

    CandidateComplianceReferencesChangeRequest.update(
      {
        AssignTo: null,
      },
      {
        where: {
          AssignTo: complianceId,
          isActive: true,
          approvalStatus: StatusEnum.Pending,
        },
      }
    ),

    CandidateCompliancePoliceCheckChangeRequest.update(
      {
        AssignTo: null,
      },
      {
        where: {
          AssignTo: complianceId,
          isActive: true,
          approvalStatus: StatusEnum.Pending,
        },
      }
    ),
  ]);
}

function validateRequestBody(req) {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().required(),
  }).options({ allowUnknown: true });

  const { error } = schema.validate(req);
  if (error) {
    if (error) throw new HttpError(400, error.message);
  }
  return;
}
