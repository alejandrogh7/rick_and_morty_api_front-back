const express = require("express");
const morgan = require("morgan");
const routes = require("./src/routes/index.js");
const errorHandler = require("./src/utils/middlewares/errorHandler.js");
const setHeaders = require("./src/utils/middlewares/setHeaders.js");
const { conn } = require("./src/models/index.js");

const app = express();

//set headers
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(setHeaders);

//set routes
app.use("/", routes);

//middlewares handler errors
app.use(errorHandler);

//server listener
conn.sync({ force: true }).then(() => {
  console.log("%database connected");
  app.listen(3001, () => {
    console.log("%listening on port 3001");
  });
});
