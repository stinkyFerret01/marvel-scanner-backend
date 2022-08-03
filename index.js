const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
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

app.listen(process.env.PORT || 3000, () => {
  console.log("Server has Started!!");
});
