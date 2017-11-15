const getNames = function(str, allNames) {
allNames.forEach()

}

const checkNames = function(str1, str2) {
  if(str2.length > str1.length) return false;
  var str2Mod = str2.slice(0, str1.length);
  return (str1 === str2Mod) ? true : false;
}
