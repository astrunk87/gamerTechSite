const db = require("../config/connection");
const { Tech } = require("../models");
const cleanDB = require("./cleanDB");

const techData = require("./techData.json");

db.once("open", async () => {
  await cleanDB("Tech", "tech");

  await Tech.create(techData);

  console.log("Technologies seeded!");
  process.exit(0);
});
