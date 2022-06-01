const axios = require('axios');
require('dotenv')

const handler = async (event) => {

  const opApiKey = process.env.op_Api_Key

  const {lat, lon} = event.queryStringParameters

  try {

    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&units=metric&cnt=1&appid=${opApiKey}`)

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
