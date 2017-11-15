var test = require('tape');
var logic = require('./src/logic');

var testArr = [
{"name": "Stephanie"},
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

test('checkNames returns false if str1 longer than str2', function(t){
  var actual = logic.checkNames('Jamieson', 'Jamie');
  var expected = false;
  t.equal(actual, expected, "checkNames returns false if str1 longer than str2");
  t.end();
});

test('checkNames returns true if str1 is the start of str2', function(t){
  var actual = logic.checkNames('Jamie', 'Jamieson');
  var expected = true;
  t.equal(actual, expected, "checkNames returns true if str1 is the start of str2");
  t.end();
});

test('checkNames returns false if str1 is not the start of str2', function(t){
  var actual = logic.checkNames('Alex', 'Jamieson');
  var expected = false;
  t.equal(actual, expected, "checkNames returns false if str1 is not the start of str2");
  t.end();
});
