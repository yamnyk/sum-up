import express, { json, urlencoded } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import config from "./config.js";
import days from "./routes/days.route.js";
import users from "./routes/user.route.js";
import situations from "./routes/situations.route.js";
import auth from "./utils/auth.js";

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use("*", auth);

app.use("/api/days", days);
app.use("/api/situations", situations);
app.use("/api/users", users);
app.use(express.static(__dirname + "/public/"));

mongoose
  .connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb connected"))
  .catch((err) => console.error(err));

app.listen(config.PORT, () => {
  console.log(`Server is running on port: ${config.PORT}`);
});
