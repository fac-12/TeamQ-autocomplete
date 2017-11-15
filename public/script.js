var nameObj = {
    "1975": "58186",
    "1976": "59476",
    "1977": "58964",
    "1978": "56318",
    "1979": "56720",
    "1980": "58379",
    "1981": "57046",
    "1982": "57113",
    "1983": "54339",
    "1984": "50562",
    "1985": "42649",
    "1986": "36181",
    "1987": "32696",
    "1988": "27886",
    "1989": "23994",
    "1990": "22225",
    "1991": "20671",
    "1992": "17820",
    "1993": "15748",
    "1994": "13999",
    "1995": "12685",
    "1996": "11728",
    "1997": "11838",
    "1998": "10690",
    "1999": "10613",
    "2000": "9384",
    "2001": "8922",
    "2002": "8537",
    "2003": "7564",
    "2004": "6541",
    "2005": "5836",
    "2006": "5267",
    "2007": "4648",
    "2008": "3791",
    "2009": "2986",
    "2010": "2619",
    "2011": "2277",
    "2012": "1923",
    "2013": "1688",
    "2014": "1520",
    "2015": "1281",
    "2016": "1153",
    "name": "Jennifer",
    "gender": "F"
};

var input = document.getElementById("search-box-id");
var datalist = document.getElementById("json-nameslist");
var test = document.getElementById('tester');
var submitBtn = document.querySelector('submit')
var searchForm = document.querySelector('.search-form');


function getNames(str){
  var request = new XMLHttpRequest();
  var url = '/search?'+str;
  request.onreadystatechange = function (){
    if(request.status === 200 && request.readyState === 4){
      var nameOptions = JSON.parse(request.responseText);
      clearElement(datalist);
      nameOptions.forEach(function(person){
        var option = document.createElement("option");
        option.value = person.name;
        datalist.appendChild(option);
      });
    }
  };
  request.open("GET", url, true);
  request.send();
}

function clearElement(element){
  while (element.firstChild) {
      element.removeChild(element.firstChild);
  }
}

input.addEventListener('keypress', function(event){
  var str = input.value+event.key;
  getNames(str);
});

searchForm.addEventListener('submit',function(e){
    e.preventDefault();
    makePlotly(nameObj);
})

function makePlotly(object){
  var xArr = [];
  var yArr = [];
  for (key in object){
    if (key !== 'name' && key !== 'gender'){
        xArr.push(key);
        yArr.push(object[key]);
    }
  }
  Plotly.plot( test, [{
    x: xArr,
    y: yArr
  }], {margin: {t:0}});
  Plotly.BUILD;
};
