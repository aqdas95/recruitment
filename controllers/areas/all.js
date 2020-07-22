const log = require("debug")("app:brands/all");

const { Areas } = require("../../models");

module.exports = async (req, res) => {
  const areas = await Areas.findAll({
    attributes: ["id", ["name", "title"]],
    order: [["id", "DESC"]],
  });

  res.status(200).jsend.success({
    areas,
  });
};
