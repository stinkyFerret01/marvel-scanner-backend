const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

///ROUTES////

app.get("/characters", (req, res) => {
  try {
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/characters?apiKey=${process.env.API_KEY}`
      )
      .then((response) => {
        let goodData = response.data.results;
        res.json(goodData);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.get("/character", (req, res) => {
  try {
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/character/${req.query.id}?apiKey=${process.env.API_KEY}`
      )
      .then((response) => {
        let charData = response.data;
        res.json(charData);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.get("/comics", (req, res) => {
  try {
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/character/${req.query.id}?apiKey=${process.env.API_KEY}`
      )
      .then((response) => {
        let charcomicsData = response.data;
        res.json(charcomicsData);
      })
      .catch((error) => {
        console.log(error);
      });
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server has Started!!");
});
