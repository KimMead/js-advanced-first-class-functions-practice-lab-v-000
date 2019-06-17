// Code your solution in this file!
const logDriverNames = function (drivers){
  drivers.forEach(function(element){
    console.log(element.name);
  });
}
const logDriversByHometown = function (drivers, hometown){
  drivers.forEach(function(element){
    if (element.hometown === hometown){
      console.log(element.name);
    }
  });
};

const driversByRevenue = function (drivers){
  return [...drivers].sort(function(a, b){
    return a.revenue > b.revenue;
  });
};

const driversByName = function (drivers){
  return [...drivers].sort(function(a, b){
    return a.name > b.name;
  });
}
