
//Get a selection of names that start with the specified string (no duplicates and max 25)
const getMatchedNames = function(str, allNames) {
  //filter out the names from allNames array that start with the str
  var filteredNames = allNames.filter(function(data) {
    return checkNames(str, data.name);
  });
  //sort by popularity
  var sortedNames = sortByPop(filteredNames);
  //remove duplicates and return the first 25
  var limitedNames = limitNames(sortedNames);
  //strip extraneous data from objects
  var onlyNames = stripObject(limitedNames);
  return onlyNames;
};

//sort by popularity over all years
const sortByPop = function(nameArr) {
  //clone array before sort
  var sortedArr = nameArr.slice(0);
  sortedArr.sort(function(a,b) {
    return sumAllYears(b) - sumAllYears(a);
  });
  return sortedArr;
};

//strip off unnecessary data
const stripObject = function(allNames) {
  // var onlyNamesArr = [];
  // allNames.forEach(function(obj){
  //   onlyNamesArr.push({"name":obj.name});
  // })
  // return onlyNamesArr;
  return allNames.map(function(obj){
    var rObj = {};
    if(obj.name){
        rObj["name"] = obj.name;
    }
    return rObj;
  })
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
  return str2.toLowerCase().startsWith(str1.toLowerCase())
};

const getNameData = function(str, allNames){
    var foundName = allNames.filter(function(object){
      return object.name.toLowerCase() === str.toLowerCase();
    });
    if(foundName.length > 1){
      return combineGenders(foundName)
    } else if(foundName.length === 1){
      return foundName[0];
    } else{
      return {name: str};
    }
}

const combineGenders = function(foundName){
  combineName = {};
  for(key in foundName[0]){
    if(key !== 'name' && key !== 'gender'){
      combineName[key] = parseInt(foundName[0][key]) + parseInt(foundName[1][key]);
    } else{
      combineName.name = foundName[0].name;
    }
  }
  return combineName;
}

const sumAllYears = function (nameObj){
  var totalNamed = 0;
  for(key in nameObj){
    if(key !== 'name' && key !== 'gender'){
      totalNamed += parseInt(nameObj[key]);
    }
  }
  return totalNamed;
}

module.exports = {
  getMatchedNames,
  getNameData,
  checkNames,
  sortByPop,
  stripObject,
  limitNames
};
