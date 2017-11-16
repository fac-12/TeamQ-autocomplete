var input = document.getElementById("search-box-id");
var datalist = document.getElementById("json-nameslist");
var display = document.getElementById('display');
var displayData = document.getElementById('display').lastElementChild;
var submitBtn = document.querySelector('submit')
var searchForm = document.querySelector('.search-form');

function updateDataList(responseArr){
  clearElement(datalist);
  responseArr.forEach(function(person){
    var option = document.createElement("option");
    option.value = person.name;
    datalist.appendChild(option);
  });
}

function request(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var result = JSON.parse(xhr.responseText);
      callback(result);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function clearElement(element){
  while (element.firstChild) {
      element.removeChild(element.firstChild);
  }
}

input.addEventListener('keypress', function(event){
  var str = input.value+event.key;
  var url = '/search?'+str.toLowerCase();
  request(url, updateDataList);
});

searchForm.addEventListener('submit',function(e){
    e.preventDefault();
    var url = '/name-data?'+input.value;
    input.value = "";
    request(url, updateNameDisplay);
})

function updateNameDisplay(nameObject){
  display.firstElementChild.textContent = nameObject.name;
  makePlotly(nameObject);
}

function makePlotly(object){
  var xArr = [];
  var yArr = [];
  for (key in object){
    if (key !== 'name' && key !== 'gender'){
        xArr.push(key);
        yArr.push(object[key]);
    }
  }
  Plotly.plot( displayData, [{
    x: xArr,
    y: yArr
  }], {margin: {t:0}});
  Plotly.BUILD;
};
