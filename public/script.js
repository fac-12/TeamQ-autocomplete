var allNames = {
{"name": "stephanie"},
{"name": "Peter"},
{"name": "Smith"},
{"name": "Tanya"},
{"name": "Georgina"},
{"name": "Natalie"},
{"name": "Hannah"},
{"name": "Jamie"},
{"name": "Tunde"},
{"name": "Sophie"},
{"name": "Stacey"},
{"name": "Olamide"},
{"name": "Olatunde"},
{"name": "Olubanjo"},
{"name": "Oluwatobi"},
{"name": "Oluwatoyosi"},
{"name": "James"},
{"name": "Justina"},
{"name": "Juliet"},
{"name": "Javier"},
{"name": "Justa"},
{"name": "Naomi"},
{"name": "Nicole"},
{"name": "Natasha"},
{"name": "Nancy"}
}

var input = document.getElementById("search-box-id");
var datalist = document.getElementById("json-nameslist");

function getNames(){
  var request = new XMLHttpRequest();

  request.onreadystatechange = function (){
    if(xhr.status === 200 && xhr.readyState === 4){
      var nameOptions = JSON.parse(request.responseText);

      nameOptions.foreach(function(name){
        var option = document.createElement("option");
        option.value = name;
        datalist.appendChild(option);
      })
    }
  }
  request.open("GET", allNames.json , true);
  request.send();
}
