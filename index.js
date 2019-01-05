// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (driver){
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  result = driversWithRevenueOver(drivers, revenue).map(function (driver) {
    return driver.name;
  });
  return result;
}

function exactMatch(drivers, jsObj) {
  return drivers.filter(function (driver) {
    let keys = Object.keys(jsObj);
    return driver[keys[0]] === jsObj[keys[0]];
  });
}

function exactMatchToList(drivers, jsObj) {
  let result = []
  let filteredDrivers = exactMatch(drivers, jsObj);
  result = filteredDrivers.map(function(driver) {
    return driver.name;
  });
  return result;
}


