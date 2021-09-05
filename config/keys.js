module.exports = {
  googleClientID:
    process.env.GOOGLE_CLIENT_ID ||
    "773002709083-8im558606iq4bh0a1n1118gnr1sink7o.apps.googleusercontent.com",
  googleClientSecret:
    process.env.GOOGLE_CLIENT_SECRET || "UCcSqCWvKwV1e-vrBFA6mnGt",
  mongoURI: process.env.MONGO_URI || "mongodb://localhost:27017/emaily-dev",
  cookieKey: process.env.COOKIE_KEY || "01123581321345589144",
};
