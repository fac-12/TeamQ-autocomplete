var allNames = [
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
];

var input = document.getElementById("search-box-id");
var datalist = document.getElementById("json-nameslist");

function getNames(){
  var request = new XMLHttpRequest();

  request.onreadystatechange = function (){
    if(request.status === 200 && request.readyState === 4){
      var nameOptions = JSON.parse(request.responseText);
      nameOptions.forEach(function(person){
        var option = document.createElement("option");
        option.value = person.name;
        datalist.appendChild(option);
      })
    }
  }
  request.open("GET", "../public/examplenames.json", true);
  request.send();
}


input.addEventListener('keydown', function(){
      getNames();
})
