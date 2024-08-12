const convertToCelsius = function(faren) {
  let celci = (faren - 32)*(5/9);
  celci = Math.round(celci * 10) / 10;
  return celci;
};

const convertToFahrenheit = function(celci) {
  let faren = celci * (9/5) + 32;
  faren = Math.round(faren * 10) / 10;
  return faren;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
