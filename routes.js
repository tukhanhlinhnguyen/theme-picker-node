const express = require("express");
const ThemeModel = require("./models");
const app = express();
const cors = require('cors');

app.use(cors());

var corsOptions = {
    preflightContinue: true,
}

app.get("/color", cors(corsOptions), async (request, response) => {
    const theme = await ThemeModel.find({
      "color": {
        $in: ["black"]
      }})
      .limit(5);
    console.log('theme:', theme)
  
    try {
      response.send(theme);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.post("/color", cors(corsOptions), async (request, response) => {
  const theme = await ThemeModel.find({
    "color": {
      $in: request.body.color
    }});
  try {
    response.send(theme);
  } catch (error) {
    response.status(500).send(error);
  }
});


module.exports = app;
