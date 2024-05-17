import express from 'express'
import {fetchDataFromRapidApi} from './api/rapidApi.js'
import cors from 'cors';


const app = express();
const port = 3001;

app.use(cors());

app.get('/', async (req, res) => {
    try{
        const data = await fetchDataFromRapidApi();
        res.json(data);
    } catch (error) {
        console.error('Error fetching data:', error)
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
