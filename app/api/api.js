const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3002;

const apiKey = '2c127294bd1e8028bf4fcc30699c26c9'; // Ganti dengan API Key RajaOngkir Anda

app.use(express.json());
app.use(cors());

app.get('/city', async (req, res) => {
  try {
    const response = await axios.get('https://api.rajaongkir.com/starter/city', {
      headers: {
        key: apiKey,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error dasar goblokkk');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});