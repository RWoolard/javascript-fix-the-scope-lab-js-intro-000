var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  var animal = "cat"
  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!

}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

// <<<<<<< HEAD
var theFunk = funkyFunction();
theFunk = theFunk()
// =======

var theFunk = funkyFunction1()
theFunk = theFunk();
// >>>>>>> 969b15b1a2e4bb6f6b42afcad9f8527955a54f76
