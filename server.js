"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require('dotenv').config()

const PORT = 3000;
const app = express();
require("./connection");
const router = require("./routes/router");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", router);
/* app.use("/", (req, res) => {
  res.send(`<a href="/api/getAll">
  <button>Obtener todos los usuarios</button>
</a>`);
}); */

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Hotel Pere María Intermodular Api",
      version: "0.1.0",
      description:
        "Api for Hotel Pere María",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Muhammad",
        url: "https://github.com/Mohasb",
        email: "mh.haidor@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
