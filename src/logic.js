
const getNames = function(str, allNames) {
  var filteredNames = allNames.filter(function(data) {
    return checkNames(str, data.name);
  });
  var limitedNames = limitNames(filteredNames);
  return limitedNames;
};

const limitNames = function(nameArr) {
  var noDup = [];
  nameArr.forEach(function(item) {
    var exists = noDup.find(function(obj) {
      return obj.name == item.name;
    });
    if (!exists) {
      noDup.push(item);
    }
  });
  return noDup.slice(0,25);
};


const checkNames = function(str1, str2) {
  //console.log(str1 + "," + str2);
  if(str1.length > str2.length) {
    return false;
  }
  var str2Mod = str2.slice(0, str1.length);
  return (str1 === str2Mod) ? true : false;
};


module.exports = {checkNames, limitNames, getNames};
