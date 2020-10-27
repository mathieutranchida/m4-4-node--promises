// Exercise 3.2 - `getAddressPosition`
// ---------------------------------

const opencage = require('opencage-api-client');
const request = require('request');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    key: process.env.OPENCAGE_API_KEY,
    q: address,
  };
  // return something...
  return opencage.geocode(requestObj)
    .then((address) => {
      const place = address.results[0];
      const lat = place.geometry.lat;
      const lng = place.geometry.lng;
      return `Latitude: ${lat}          Longitude: ${lng}`
    })
    .catch((err) => {
      return err.error ? JSON.parse(err.error) : err;
    })
};

getPositionFromAddress(
  '1455 Boulevard de Maisonneuve O, Montréal, QC H3G 1M8'
).then((response) => console.log(response));

module.exports = { getPositionFromAddress };