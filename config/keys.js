if (process.env.NODE_ENV === "production") {
  // hi we are in production - return the production set of keys
  module.exports = require("./prod");
} else {
  // hi again we are in development - return the dev keys!!!
  module.exports = require("./dev");
}
