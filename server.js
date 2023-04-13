// dotenv package
require("dotenv").config();

const express = require("express");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const Index = require("./views/Index.jsx");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

// Babel configuration
require("@babel/register")({
  presets: ["@babel/preset-react"],
});

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

//====Middleware=====

app.use((req, res, next) => {
  //console.log('req.url')
  next();
});

//parsing the data
app.use(express.urlencoded({ extended: false }));

// MongoDB setup
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));

// Routes
app.get("/", (req, res) => {
  const flights = [];
  const html = ReactDOMServer.renderToString(
    React.createElement(Index, { flights })
  );
  res.render("Index", { html });
});

app.get("*", (req, res) => {
  res.render("404");
});
app.get("/flights/new", (req, res) => {
  res.render("New");
});

app.get("/flights/:id", (req, res) => {
  const flightId = req.params.id;
  const flight = {
    _id: flightId,
    airline: "Airline",
    flightNo: "123",
    departs: new Date(),
  };
  const html = ReactDOMServer.renderToString(
    React.createElement(Show, { flight })
  );
  res.render("Show", { html });
});
