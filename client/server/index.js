import express from 'express';
import { fetchDataFromRapidApi } from './api/rapidApi.js';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());

app.get('/', async (req, res) => {
  try {
    const data = await fetchDataFromRapidApi([
      'seasons/8ac404c1-7494-4b04-b8a6-ee97913de526/constructors'
    ]);
    res.json(data); // Since it's only one endpoint
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.get('/grandprix', async (req, res) => {
  try {
    const data = await fetchDataFromRapidApi([
      'grands-prix?seasonYear=2024&pageSize=24&seasonYear=2024&pageSize=24'
    ]);
    res.json(data); // Since it's only one endpoint
  } catch (error) {
    console.error('Error fetching grand prix data:', error);
    res.status(500).send('Error fetching grand prix data');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
