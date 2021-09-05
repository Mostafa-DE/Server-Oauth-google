const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
require("./models/Users");
require("./services/passport");
const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

mongoose
  .connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log("Something went wrong", e);
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server active on port ${PORT} :) `);
});

//745193880645-6c9if85fukq17oao6uiiliv4cfj2kkef.apps.googleusercontent.com
//rE63nHuvQSkXauMQ73UbQSKY SECRET_PRODUCTION
