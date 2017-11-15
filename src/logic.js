const getNames = function(str, allNames) {
  var filteredNames = allNames.filter(function(data) {
    checkNames(str, data.name);
  });
}

const checkNames = function(str1, str2) {
  console.log(str2.length + "," + str1.length);
  if(str1.length > str2.length) {
    return false;
  }
  console.log("here");
  var str2Mod = str2.slice(0, str1.length);
  return (str1 === str2Mod) ? true : false;
}


module.exports = {checkNames, getNames};
