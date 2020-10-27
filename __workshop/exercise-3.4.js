// Exercise 3.4 - `getDistanceFromIss`
// ----------------------------------


const { getIssPosition } = require("./exercise-3.1");
const { getPositionFromAddress } = require("./exercise-3.2");
const { getAddressFromPosition } = require("./exercise-3.2");

const getDistanceFromIss = (address) => {
  const positionAddress = getPositionFromAddress(address);
  const positionIss = getIssPosition();
  const getDistance = (pos1, pos2) => {
    return Math.sqrt(
      Math.pow(pos1.lat - pos2.lat, 2) + Math.pow(pos1.lng - pos2.lng, 2)
    );
  };
};
