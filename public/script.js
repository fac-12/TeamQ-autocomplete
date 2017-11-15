var allNames = {
  name1: "stephanie",
  name2: "Peter",
  name3: "Smith",
  name4: "Tanya",
  name5: "Georgina",
  name6: "Natalie",
  name7: "Hannah",
  name8: "Jamie",
  name9: "Tunde",
  name10: "Sophie",
  name11: "Stacey",
  name12: "Olamide",
  name13: "Olatunde",
  name14: "Olubanjo",
  name15: "Oluwatobi",
  name16: "Oluwatoyosi",
  name17: "James",
  name18: "Justina",
  name19: "Juliet",
  name20: "Javier",
  name21: "Justa",
  name22: "Naomi",
  name23: "Nicole",
  name24: "Natasha",
  name25: "Nancy"
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

      input.placeholder = "name"
    } else{
      input.placeholder = "Couldnt load names options";
    }
  }
  input.placeholder = "Loading names..."
  request.open("GET", allNames, true);
  request.send();
}
