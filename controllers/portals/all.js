const log = require("debug")("app:portals/all");

const { Portals } = require("../../models");

module.exports = async (req, res) => {
  const portals = await Portals.findAll({
    order: [["id", "DESC"]],
    attributes: ["id", ["name", "title"]],
    raw: true,
    nest: true,
  });

  res.status(200).jsend.success({
    portals,
  });
};
