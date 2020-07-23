const log = require("debug")("app:vacancies/get");

const {
  Brands,
  ContactPerson,
  Hospitals,
  HospitalSubSites,
  Portals,
  RecruiterProfiles,
  Users,
  Vacancies,
  VacancyAttachments,
  VacancyShifts,
  WeeklyRota,
} = require("../../models");

const { VacancyTypesID } = require("../../common/enums");

module.exports = async (req, res) => {
  const { id } = req.params;
  let vacancy = await Vacancies.findByPk(id, {
    include: [
      {
        model: VacancyAttachments,
        as: "VacancyAttachments",
        attributes: ["id", "vacancieId", "fileName", "isInternalFile"],
      },
      {
        model: Hospitals,
        as: "Hospitals",
        attributes: ["id", "name"],
      },
      {
        model: HospitalSubSites,
        as: "HospitalSubSites",
        attributes: ["id", "name"],
      },
      {
        model: VacancyShifts,
        as: "VacancyShifts",
        attributes: ["id", "startDate", "startTime", "endTime"],
      },
      {
        model: WeeklyRota,
        as: "WeeklyRota",
        attributes: ["id", "day", "startTime", "endTime"],
      },
      {
        model: Portals,
        as: "Portals",
        attributes: ["id", "name"],
      },
      {
        model: Brands,
        as: "Brands",
        attributes: ["id", "name"],
      },
      {
        model: ContactPerson,
        as: "ContactPerson",
        attributes: ["id", "name", "email", "phone"],
      },
      {
        model: Users,
        as: "Users",
        attributes: ["id"],
        include: [
          {
            model: RecruiterProfiles,
            as: "RecruiterProfiles",
            attributes: ["firstName", "lastName"],
          },
        ],
      },
    ],
    order: [
      [{ model: VacancyShifts, as: "VacancyShifts" }, "startDate", "ASC"],
      [{ model: WeeklyRota, as: "WeeklyRota" }, "id", "ASC"],
    ],
  });

  vacancy = formateVacancyDetail(vacancy);

  res.status(200).jsend.success({
    vacancy,
  });
};

function formateVacancyDetail(vacancy) {
  let hospital = {};
  let subSite = {};
  if (vacancy.Hospitals === null) {
    hospital = {
      id: null,
      name: "",
    };
  } else {
    hospital = vacancy.Hospitals;
  }
  if (vacancy.HospitalSubSites === null) {
    subSite = {
      id: null,
      name: "",
    };
  } else {
    subSite = vacancy.HospitalSubSites;
  }

  let ConPerson;
  if (vacancy.ContactPerson === null) {
    ConPerson = {
      id: null,
      name: "",
      email: "",
      phone: "",
    };
  } else {
    ConPerson = vacancy.ContactPerson;
  }

  const returnObj = {
    id: vacancy.id,
    autoNumber: vacancy.autoNumber,
    refNo: vacancy.refNo,
    onCallRota: vacancy.onCallRota,
    additionalInfo: vacancy.additionalInfo,
    jobTitle: vacancy.jobTitle,
    submissionEmail: vacancy.submissionEmail,
    gradeId: vacancy.gradeId,
    specialityId: vacancy.specialityId,
    userId: vacancy.userId,
    status: vacancy.status,
    startDate: vacancy.startDate,
    endDate:
      vacancy.vacancyType === VacancyTypesID.Permanent ? "" : vacancy.endDate,
    createdAt: vacancy.createdAt,
    updatedAt: vacancy.updatedAt,
    processed: vacancy.processed,
    vacancyType: vacancy.vacancyType,
    vacancyViaPortal: vacancy.vacancyViaPortal,
    portalId: vacancy.portalId,
    hospitalSubSitesId: vacancy.hospitalSubSitesId,
    contactPersonId: vacancy.contactPersonId,
    ContactPerson: ConPerson,
    brandId: vacancy.brandId,
    Hospitals: hospital,
    HospitalSubSites: subSite,
    VacancyShifts: vacancy.VacancyShifts,
    WeeklyRota: vacancy.WeeklyRota,
    Portals: vacancy.Portals,
    Brands: vacancy.Brands,
    VacancyAttachments: vacancy.VacancyAttachments,
    createdBy: `${vacancy.Users.RecruiterProfiles.firstName} ${vacancy.Users.RecruiterProfiles.lastName}`,
  };
  return returnObj;
}
