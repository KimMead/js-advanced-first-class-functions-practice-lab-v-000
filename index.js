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