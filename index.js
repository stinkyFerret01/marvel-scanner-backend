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
    if (req.query.name.length < 3) {
      axios
        .get(
          `https://lereacteur-marvel-api.herokuapp.com/characters?skip=${req.query.skip}&apiKey=${process.env.API_KEY}`
        )
        .then((response) => {
          let goodData = response.data;
          res.json(goodData);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(
          `https://lereacteur-marvel-api.herokuapp.com/characters?skip=${req.query.skip}&name=${req.query.name}&apiKey=${process.env.API_KEY}`
        )
        .then((response) => {
          let goodData = response.data;
          res.json(goodData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
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

app.get("/charcomics", (req, res) => {
  try {
    axios
      .get(
        `https://lereacteur-marvel-api.herokuapp.com/comics/${req.query.id}?apiKey=${process.env.API_KEY}`
      )
      .then((response) => {
        let charComicData = response.data;
        res.json(charComicData);
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
        `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.API_KEY}`
      )
      .then((response) => {
        let charComicsData = response.data;
        res.json(charComicsData);
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
