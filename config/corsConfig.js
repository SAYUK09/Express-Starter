const { port } = require("../config/envConfig");

const corsOptions = {
  origin:
    process.env.NODE_ENV === "development"
      ? `http://localhost/${port}`
      : `https://admissions.neog.camp`,
};

module.exports = { corsOptions };
