// Exercise 3.1 - `getIssPosition`
// -----------------------------

// require the 'request-promise' module.
const request = require('request-promise');

// Returns the current position of the ISS
const getIssPosition = () => {
  return request(`http://api.open-notify.org/iss-now.json`)
  .then((response) => JSON.parse(response))
  .then((parsedResponse) => {
    const lat = parsedResponse.iss_position.latitude;
    const lng = parsedResponse.iss_position.longitude;
    return `Longitude:${lat}         Latitude:${lng}`;
  })
  .catch((err) => {
    return err.error ? JSON.parse(err.error) : err;
  });
};

getIssPosition().then((response) => console.log(response))

module.exports = { getIssPosition };
