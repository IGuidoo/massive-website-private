const express = require('express');
const axios = require('axios'); // Add this line
const app = express();
const port = 3001;

const DEEPL_API = process.env.DEEPL_API;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.post('/translate', async (req, res) => {
  const apiKey = DEEPL_API;
  const textToTranslate = req.body.text;
  const targetLanguage = 'DE'; // German

  try {
    const response = await axios.post('https://api.deepl.com/v2/translate', {
      auth_key: apiKey,
      text: textToTranslate,
      target_lang: targetLanguage,
    });

    res.send(response.data);
  } catch (error) {
    console.error('Error fetching data from Deepl:', error);
    res.status(500).send('An error occurred while fetching data from Deepl.');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});