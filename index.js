import express from "express";
// import db from "./config/database.js";
import createError from "http-errors";
import cors from "cors";
import favicon from "serve-favicon";
import debug from "debug";
import DB from "./config/database.js";

// import cors from "cors";
// import favicon  from 'serve-favicon';
import { createServer } from "http";
// import { Server } from "socket.io";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import mainRouter from "./routes/main/mainRoute.js";
import usersRouter from "./routes/users/usersRoute.js";
import infoRouter from "./routes/amina/infoRoute.js";
import diagnoanalysis from "./routes/amina/diagnoanalysisRoute.js";
import imagesreport from "./routes/amina/imagesreportRoute.js";
import illness from "./routes/amina/illnessRoute.js";
import operations from "./routes/amina/operationsRoute.js";
import review from "./routes/amina/reviewRoute.js";
import treatment from "./routes/amina/treatmentRoute.js";
import siteRouter from "./routes/sites/sitesRoute.js";

const allowedOrigins = [
  null,
  "http://localhost:3000",
  "http://localhost:5000",
  "http://localhost:5001",
  "http://172.25.0.23:5000",
  "http://172.25.0.23:3000",
  "http://172.25.0.23:5001",
  "http://sql:5000",
  "http://sql:3000",
  "http://sql:5001",
  "http://sql.corp.wpu.sy:5000",
  "http://sql.corp.wpu.sy:3000",
  "http://sql.corp.wpu.sy:5001",
  "http://192.168.1.11:3000",
  "http://192.168.1.11:5000",
  "http://192.168.1.11:5001",
  "*",
];

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}
const aminaServer = express();

function onListening() {
  const addr = aminaServer.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}

const __dirname = process.cwd();
const port = normalizePort(process.env.PORT || "5000");

// view engine setup
aminaServer.set("views", path.join(__dirname, "views"));
aminaServer.set("view engine", "pug");
aminaServer.set("port", port);

aminaServer.use(logger("dev"));
aminaServer.use(express.json());
aminaServer.use(express.urlencoded({ extended: false }));
// aminaServer.use(cookieParser());

aminaServer.use(express.static(path.join(__dirname, "sites/amina/")));

aminaServer.get("/amina", function (req, res, next) {
  res.send("<h1>hello</h1>");
});

aminaServer.use("/", mainRouter);
aminaServer.use("/sites", siteRouter);
aminaServer.use(express.json());

aminaServer.use("/amina/data", usersRouter);
aminaServer.use("/amina/data", infoRouter);
aminaServer.use("/amina/data", diagnoanalysis);
aminaServer.use("/amina/data", illness);
aminaServer.use("/amina/data", review);
aminaServer.use("/amina/data", treatment);
aminaServer.use("/amina/data", operations);
aminaServer.use("/amina/data", imagesreport);

// catch 404 and forward to error handler
aminaServer.use(function (req, res, next) {
  next(createError(404));
});

// error handler
aminaServer.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

aminaServer.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

aminaServer.use(favicon("./images/favicon.ico"));
try {
  DB.authenticate();
  console.log("Database connected.....");
} catch (error) {
  console.error("Connection error:", error);
}

aminaServer.use(function (req, res, next) {
  next(createError(404));
});

aminaServer.listen(port, () => console.log(`server running at port ${port}`));
aminaServer.on("error", onError);
aminaServer.on("listening", onListening);

export default aminaServer;
