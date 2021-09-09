module.exports = {
  googleClientID:
    process.env.GOOGLE_CLIENT_ID ||
    "773002709083-8im558606iq4bh0a1n1118gnr1sink7o.apps.googleusercontent.com",
  googleClientSecret:
    process.env.GOOGLE_CLIENT_SECRET || "UCcSqCWvKwV1e-vrBFA6mnGt",
  mongoURI:
    process.env.MONGO_URI ||
    "mongodb+srv://mostafa:mostafa078900@emaily-dev.0s44o.mongodb.net/emaily-dev?retryWrites=true&w=majority",
  cookieKey: process.env.COOKIE_KEY || "01123581321345589144",
  stripePublishableKey:
    process.env.STRIPE_PUBLISHABLE_KEY ||
    "pk_test_51JXPreCoNHTUZXFEtbo8S3SOsMdgJweXROSm5xMRzP7kqvEH3i4SCCcpL3VtaibANqScHoOcpWhodzVOvV0nCDZ700gd5eVUlb",
  stripeSecretKey:
    process.env.STRIPE_SECRET_KEY ||
    "sk_test_51JXPreCoNHTUZXFEFQwasX8ZLwIb47x7PJLedGlSrjk29P9po63TyiDfP7XrhHsuw3sBWFGiAShn88sy1NfJ19kr00IPvaotjF",
};
