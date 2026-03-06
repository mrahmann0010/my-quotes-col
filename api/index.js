// For Vercel Deployment - Serverless Function

// api/index.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("../app");

// load env vars – in Vercel these come from the dashboard, but
// dotenv still lets you run locally via config.env
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE_URL?.replace(
  "<db_password>",
  process.env.DATABASE_PASS,
);

let cached = global._mongo; // avoid reconnecting on warm invocations
async function connect() {
  if (cached) return cached;
  const conn = await mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  cached = conn;
  global._mongo = conn;
  return conn;
}

module.exports = async (req, res) => {
  await connect();
  return app(req, res); // express app handles routing
};
