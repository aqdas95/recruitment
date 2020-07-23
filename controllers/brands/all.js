const log = require("debug")("app:brands/all");

const { Brands } = require("../../models");

module.exports = async (req, res) => {
  const brands = await Brands.findAll({
    order: [["id", "DESC"]],
    attributes: ["id", ["name", "title"]],
  });

  res.status(200).jsend.success({
    brands,
  });
};
