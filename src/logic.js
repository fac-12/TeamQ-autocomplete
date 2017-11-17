
//Get a selection of names that start with the specified string (no duplicates and max 25)
const getMatchedNames = function(str, allNames) {
  //filter out the names from allNames array that start with the str
  const filteredNames = allNames.filter(function(data) {
    return checkNames(str, data.name);
  });
  //sort by popularity
  const sortedNames = sortByPop(filteredNames);
  //remove duplicates and return the first 25
  const limitedNames = limitNames(sortedNames);
  //strip extraneous data from objects
  const onlyNames = stripObject(limitedNames);
  return onlyNames;
};

//sort by popularity over all years
const sortByPop = function(nameArr) {
  //clone array before sort
  let sortedArr = nameArr.slice(0);
  sortedArr.sort(function(a,b) {
    return sumAllYears(b) - sumAllYears(a);
  });
  return sortedArr;
};

//strip off unnecessary data
const stripObject = function(allNames) {
  let onlyNamesArr = [];
  allNames.forEach(function(obj){
    onlyNamesArr.push({"name":obj.name});
  })
  return onlyNamesArr;
};

//remove duplicates and return the first 25
const limitNames = function(nameArr) {
  let noDup = [];
  nameArr.forEach(function(item) {
    const exists = noDup.find(function(obj) {
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
  let str2Mod = str2.slice(0, str1.length);
  return (str1.toLowerCase() === str2Mod.toLowerCase()) ? true : false;
};

const getNameData = function(str, allNames){
    const foundName = allNames.filter(function(object){
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
  let totalNamed = 0;
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
