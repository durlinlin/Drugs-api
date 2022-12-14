import db from "./db/connection.js";
// add routes
import routes from "./router.js";
import express from "express";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/", routes);

db.on("connected", () => {
  console.clear()
  console.log(chalk.blue("Connected to MongoDB!"));
  app.listen(port, () => {
    console.log(`Express sever running in development on http://localhost:${port}`);
  });
});