var input = document.getElementById("search-box-id");
var datalist = document.getElementById("json-nameslist");
var display = document.getElementById('display');
var displayData = document.getElementById('graph-div');
var graphTitle = document.getElementById('graph-title');
var submitBtn = document.querySelector('submit')
var searchForm = document.getElementById('search-form');
var clearGraph = document.getElementById('clear-graph');
var graphDiv = document.getElementsByClassName('svg-container');

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

function updateDataList(responseArr){
  clearElement(datalist);
  responseArr.forEach(function(person){
    var option = document.createElement("option");
    option.value = person.name;
    datalist.appendChild(option);
  });
}

function updateNameDisplay(nameObject){
  clearElement(datalist);
  if (Object.keys(nameObject).length>1) {
    graphTitle.className = "display__title";
    graphTitle.textContent = "Most recently searched name: " + nameObject.name;
    makePlotly(nameObject);
    clearGraph.className = "display-button";
    graphDiv[0].style.margin = "0px auto";
  } else {
    graphTitle.textContent = nameObject.name +" is not a common enough name to be in our database";
  }
}

var d3 = Plotly.d3;

var gd3 = d3.select('#graph-div').style({
  width: 90 + '%',
  height: 100 + '%'
});
var gd = gd3.node();

function makePlotly(object){
  var xArr = [];
  var yArr = [];
  for (var key in object){
    if (key !== 'name' && key !== 'gender'){
        xArr.push(key);
        yArr.push(object[key]);
    }
  }

  Plotly.plot( gd, [{
    x: xArr,
    y: yArr,
    name: object.name
  }], {
  margin: {
    l: 50,
    r: 50,
    b: 50,
    t: 50,
    pad: 4
  }});
  Plotly.BUILD;
}

window.onresize = function() {
  Plotly.Plots.resize(gd)
};

input.addEventListener('keypress', function(event){
  var str = input.value+event.key;
  var url = '/search?'+str.toLowerCase();
  request(url, updateDataList);
});

searchForm.addEventListener('submit',function(e){
    e.preventDefault();
    if(input.value !== ""){
      var url = '/name-data?'+input.value;
      request(url, updateNameDisplay);
  }
  input.value = "";
});

clearGraph.addEventListener('click', function() {
  graphTitle.textContent = "";
  Plotly.purge(displayData);
  clearGraph.className = "display-button hide";
  graphTitle.className = "display__title hide";
});
