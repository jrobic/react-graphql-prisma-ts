if (process.env.NODE_ENV === "production") {
  // eslint-disable-next-line
  require("dotenv").config();
} else {
  // eslint-disable-next-line global-require
  require("../config/env");
}
