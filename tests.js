var test = require('tape');
var logic = require('./src/logic');

var testArr = [{
    "name": "Stephanie"
  },
  {
    "name": "Peter"
  },
  {
    "name": "Smith"
  },
  {
    "name": "Tanya"
  },
  {
    "name": "Georgina"
  },
  {
    "name": "Natalie"
  },
  {
    "name": "Hannah"
  },
  {
    "name": "Jamie"
  },
  {
    "name": "Tunde"
  },
  {
    "name": "Sophie"
  },
  {
    "name": "Stacey"
  },
  {
    "name": "Olamide"
  },
  {
    "name": "Olatunde"
  },
  {
    "name": "Olubanjo"
  },
  {
    "name": "Oluwatobi"
  },
  {
    "name": "Oluwatoyosi"
  },
  {
    "name": "James"
  },
  {
    "name": "Justina"
  },
  {
    "name": "Juliet"
  },
  {
    "name": "Javier"
  },
  {
    "name": "Justa"
  },
  {
    "name": "Naomi"
  },
  {
    "name": "Nicole"
  },
  {
    "name": "Natasha"
  },
  {
    "name": "Nancy"
  },
  {
    "name": "Naudeiw"
  },
  {
    "name": "Nahuifewbf"
  },
  {
    "name": "Nahuiew"
  },
  {
    "name": "Naeown"
  },
  {
    "name": "Nbehiwbc"
  },
  {
    "name": "Natalie"
  },
  {
    "name": "Ndeiuw"
  },
  {
    "name": "Ncueiwb"
  },
  {
    "name": "Nbucib"
  },
  {
    "name": "Nbceibc"
  },
  {
    "name": "Ndebiu"
  },
  {
    "name": "Ncbejwc "
  },
  {
    "name": "Olatunde"
  },
  {
    "name": "Olubanjo"
  },
  {
    "name": "Oluwatobi"
  },
  {
    "name": "Oluwatoyosi"
  },
  {
    "name": "Olamide"
  },
  {
    "name": "Olatunde"
  },
  {
    "name": "Ncbiw"
  },
  {
    "name": "Ncbueiwbc"
  },
  {
    "name": "Ndeiu2"
  },
  {
    "name": "Nbcuiewb"
  },
  {
    "name": "Nbceiw"
  },
  {
    "name": "Nbeyu"
  },
  {
    "name": "Ncvuywvc"
  },
  {
    "name": "Ncvyuw"
  },
  {
    "name": "Nbcduwb"
  },
  {
    "name": "Ncbiuwb"
  },
  {
    "name": "Ncuibw"
  },
  {
    "name": "Nibec"
  },
  {
    "name": "Neuidb"
  },
  {
    "name": "Nceibc"
  },
  {
    "name": "Neivc"
  },
  {
    "name": "Nvbycievw"
  },
  {
    "name": "Nuicbdc"
  }
];

var testArr2 = [{
    "name": "Stephanie"
  },
  {
    "name": "Peter"
  },
  {
    "name": "Smith"
  },
  {
    "name": "Tanya"
  },
  {
    "name": "Georgina"
  },
  {
    "name": "Stephanie"
  },
  {
    "name": "Peter"
  },
  {
    "name": "Smith"
  },
  {
    "name": "Tanya"
  },
  {
    "name": "Georgina"
  },
];

var testArr3 = [{
    "age": "22",
    "name": "Olamide"
  },
  {
    "age": "29",
    "name": "Olatunde"
  },
  {
    "age": "30",
    "name": "Olubanjo"
  },
  {
    "age": "24",
    "name": "Oluwatobi"
  },
  {
    "age": "34",
    "name": "Oluwatoyosi"
  }
];

test('checkNames returns false if str1 longer than str2', function (t) {
  var actual = logic.checkNames('Jamieson', 'Jamie');
  var expected = false;
  t.equal(actual, expected, "checkNames returns false if str1 longer than str2");
  t.end();
});

test('checkNames returns true if str1 is the start of str2', function (t) {
  var actual = logic.checkNames('Jamie', 'Jamieson');
  var expected = true;
  t.equal(actual, expected, "checkNames returns true if str1 is the start of str2");
  t.end();
});

test('checkNames returns false if str1 is not the start of str2', function (t) {
  var actual = logic.checkNames('Alex', 'Jamieson');
  var expected = false;
  t.equal(actual, expected, "checkNames returns false if str1 is not the start of str2");
  t.end();
});

test('limitNames returns a max of 25 items', function (t) {
  var actual = logic.limitNames(testArr).length;
  var expected = 25;
  t.equal(actual, expected, 'limitNames returns a max of 25 items');
  t.end();
});

test('limitNames returns only unique items', function (t) {
  var actual = logic.limitNames(testArr2);
  var expected = [{"name": "Stephanie"},
  {"name": "Peter"},
  {"name": "Smith"},
  {"name": "Tanya"},
  {"name": "Georgina"}];
  t.deepEqual(actual, expected, 'limitNames returns only unique items');
  t.end();
});


test('getNames returns correct array of objects', function (t) {
  var actual = logic.getMatchedNames('Ol', testArr);
  var expected = [{
      "name": "Olatunde"
    },
    {
      "name": "Olamide"
    },
    {
      "name": "Olubanjo"
    },
    {
      "name": "Oluwatobi"
    },
    {
      "name": "Oluwatoyosi"
    }
  ];
  t.deepEqual(actual, expected, 'getNames returns correct array of objects');
  t.end();
});

test('stripObject return array with only name value pair', function(t){
  var actual = logic.stripObject(testArr3);
  var expected = [{
      "name": "Olamide"
    },
    {
      "name": "Olatunde"
    },
    {
      "name": "Olubanjo"
    },
    {
      "name": "Oluwatobi"
    },
    {
      "name": "Oluwatoyosi"
    }
  ];
  t.deepEqual(actual, expected, "should return an array with only name value pair");
  t.end();
});
test('getNameData return the name object of the string searched',function(t){
  var actual = logic.getNameData("Olatunde", testArr3);
  var expected =   {
      "age": "29",
      "name": "Olatunde"
    };
  t.deepEqual(actual, expected, "should return an object with the name olatunde");
  t.end();
});
