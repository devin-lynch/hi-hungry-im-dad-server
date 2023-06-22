const express = require('express');
const app = express();
const PORT = 8000;
const cors = require('cors');

app.use(cors());

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

app.listen(PORT, () => {
  console.log(`Tuned into port ${PORT}`);
});
