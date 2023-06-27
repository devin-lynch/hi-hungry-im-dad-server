const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');
const db = require('./models');

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const url = 'https://icanhazdadjoke.com/';
    let response = await fetch(url, {
      headers: {
        Accept: 'application/json',
      },
    });
    let data = await response.json();
    res.send(JSON.stringify(data.joke));
  } catch (error) {
    console.log(error);
  }
});

app.post('/save', async (req, res) => {
  try {
    console.log(req.body.text);
    const newJoke = await db.joke.create({
      text: req.body.text,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Tuned into port ${PORT}`);
});
