
//Get a selection of names that start with the specified string (no duplicates and max 25)
const getMatchedNames = function(str, allNames) {
  //filter out the names from allNames array that start with the str
  var filteredNames = allNames.filter(function(data) {
    return checkNames(str, data.name);
  });
  //sort by popularity
  var sortedNames = sortBy2016(filteredNames);
  //remove duplicates and return the first 25
  var limitedNames = limitNames(sortedNames);
  //strip extraneous data from objects
  var onlyNames = stripObject(limitedNames);
  return onlyNames;
};

//sort by popularity in 2016
const sortBy2016 = function(nameArr) {
  //clone array before sort
  var sortedArr = nameArr.slice(0);
  sortedArr.sort(function(a,b) {
    return parseInt(b['2016'])-parseInt(a['2016']);
  });
  return sortedArr;
};

//strip off unnecessary data
const stripObject = function(allNames) {
  var onlyNamesArr = [];
  allNames.forEach(function(obj){
    onlyNamesArr.push({"name":obj.name});
  })
  return onlyNamesArr;
};

//remove duplicates and return the first 25
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

//return true if str2 starts with str1, otherwise false
const checkNames = function(str1, str2) {
  if(str1.length > str2.length) {
    return false;
  }
  var str2Mod = str2.slice(0, str1.length).toLowerCase();
  return (str1 === str2Mod) ? true : false;
};


module.exports = {getMatchedNames};
