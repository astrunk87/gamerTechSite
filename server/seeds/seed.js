const db = require("../config/connection");
const { Tech } = require("../models");
const cleanDB = require("./cleanDB");
const techData = require("./techData.json");

db.once("open", async () => {
  try {
  await cleanDB("Tech", "teches");

  await Tech.create(techData);

  console.log("Technologies seeded!");
  process.exit(0);
} catch (err) {
  throw err;
}
});
