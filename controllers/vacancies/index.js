"use strict";

const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const controller = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    if (file !== "helper.js") {
      const action = require(path.join(__dirname, file));
      controller[file.replace(".js", "")] = action;
    }
  });

module.exports = controller;
