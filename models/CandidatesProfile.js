/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  var CandidatesProfile = sequelize.define(
    "CandidatesProfile",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Users",
          key: "id",
        },
      },
      refNo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      forename: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      DOB: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      postCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      locationRegion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      mobilePhone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gmcNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paymentTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "PaymentTypes",
          key: "id",
        },
      },
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      candidateLat: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      candidateLong: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: sequelize.fn("now"),
      },
      updatedAt: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: sequelize.fn("now"),
      },
      lastActiveStatus: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      updated: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      companyRegistrationName: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      registrationNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      eclipseCandidateCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vatNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
      candidatePreferencePostCodeLat: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      candidatePreferencePostCodeLong: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      autoNumber: {
        type: DataTypes.INTEGER,
      },
      isEnableGMC: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "",
      },
    },
    {
      freezeTableName: true,
      tableName: "CandidatesProfile",
    }
  );

  CandidatesProfile.associate = function (models) {
    CandidatesProfile.belongsTo(models.Users, {
      as: "Users",
      onDelete: "CASCADE",
      foreignKey: "userId",
    });

    CandidatesProfile.belongsTo(models.PaymentTypes, {
      as: "PaymentTypes",
      onDelete: "CASCADE",
      foreignKey: "paymentTypeId",
    });

    CandidatesProfile.hasOne(models.CandidatePreference, {
      as: "CandidatePreference",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasMany(models.CandidateSpeciality, {
      as: "CandidateSpeciality",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasMany(models.JobBroadCasts, {
      as: "JobBroadCasts",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasMany(models.CandidateGrade, {
      as: "CandidateGrade",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasMany(models.RecruiterCandidates, {
      as: "RecruiterCandidates",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasMany(models.CandidateAvailabilityShortTerm, {
      as: "CandidateAvailabilityShortTerm",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasMany(models.CandidateAvailabilityLongTerm, {
      as: "CandidateAvailabilityLongTerm",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasMany(models.CandidateUnAvailabilityDetails, {
      as: "CandidateUnAvailabilityDetails",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasMany(models.CandidateChangeRequest, {
      as: "CandidateChangeRequest",
      onDelete: "CASCADE",
      foreignKey: "candidateProfileID",
    });

    CandidatesProfile.hasMany(
      models.CandidateComplianceDocumentsChangeRequest,
      {
        as: "CandidateComplianceDocumentsChangeRequest",
        onDelete: "CASCADE",
        foreignKey: "candidateId",
      }
    );

    CandidatesProfile.hasMany(
      models.CandidateCompliancePoliceCheckChangeRequest,
      {
        as: "CandidateCompliancePoliceCheckChangeRequest",
        onDelete: "CASCADE",
        foreignKey: "candidateId",
      }
    );

    CandidatesProfile.hasMany(models.CandidateChangeRequestSpecialities, {
      as: "CandidateChangeRequestSpecialities",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasMany(models.CandidateAvailabilityPermanent, {
      as: "CandidateAvailabilityPermanent",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasMany(models.PlacedCandidate, {
      as: "PlacedCandidate",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasMany(models.CandidateAreas, {
      as: "CandidateAreas",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasMany(models.CandidateDocumentsTypeStatus, {
      as: "CandidateDocumentsTypeStatus",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasMany(models.CandidateComplianceDocuments, {
      as: "CandidateComplianceDocuments",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasMany(models.CandidateComplianceReferences, {
      as: "CandidateComplianceReferences",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasMany(models.CandidateCompliancePoliceCheck, {
      as: "CandidateCompliancePoliceCheck",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasMany(
      models.CandidateComplianceReferencesChangeRequest,
      {
        as: "CandidateComplianceReferencesChangeRequest",
        onDelete: "CASCADE",
        foreignKey: "candidateId",
      }
    );

    CandidatesProfile.hasMany(models.CandidateComplianceStatus, {
      as: "CandidateComplianceStatus",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasOne(models.CandidateAgreement, {
      as: "CandidateAgreement",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasOne(models.CandidateStatistics, {
      as: "CandidateStatistics",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });

    CandidatesProfile.hasMany(models.BlacklistCandidates, {
      as: "BlacklistCandidates",
      onDelete: "CASCADE",
      foreignKey: "candidateId",
    });
  };
  return CandidatesProfile;
};
