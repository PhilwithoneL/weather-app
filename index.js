const PORT = 8000;
 
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { userInfo } = require('os');

require('dotenv').config();

const app = express();

app.listen(8000, () => console.log('Server is running on port'))


ocApiKey = '1aae919c70cf42beb36752d9ab528abd';
opApiKey =  '16390c2d19b2ac72e041c0b0c4de7d15';


app.get('/', function(req, res){

  const options = {
    method: 'Get',
    ocApi_url = `https://api.opencagedata.com/geocode/v1/json?q=67+69&key=${ocApiKey}`
  }

  axios.request(options).then((repsonse) => {
    console.log(response.data)
  })
      
});

