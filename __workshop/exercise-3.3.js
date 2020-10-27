// Exercise 3.3 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
const request = require('request');
require('dotenv').config();

function getAddressFromPosition(lat, lng) {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: `${lat} ${lng}`,
  };
  // return ...
  return opencage.geocode(requestObj)
    .then((data) => {
      const place = data.results[0];
      const result = place.formatted;
      return result;
    })
    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err; 
    })
};

getAddressFromPosition('48.8584', '2.2945').then((response) =>
  console.log(response)
);

module.exports = { getAddressFromPosition };