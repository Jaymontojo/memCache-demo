const express = require('express');
const cache = require('./utils/middleware');
const axios = require('axios');

const configureServer = () => {
  const app = express();

  app.use(express.json());
  // app.use(cache(10));


  app.get('/api/people/', cache(10), async (req, res) => {
    const response = await axios.get('https://swapi.dev/api/people/');
    res.status(200).send(response.data);
  });

  app.get('/api/people/:personID', async (req, res) => {
    const { personID } = req.params;
    const response = await axios.get(`https://swapi.dev/api/people/${personID}`);
    res.status(200).send(response.data);
  });

  return app;
}; 

module.exports= configureServer;

