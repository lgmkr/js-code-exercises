// ES5

var simple = function() {
  for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

var simple2 = function() {
  var i, output;
  for (i = 1; i < 101; i += 1) {
    output = "";
    if (!(i % 3)) {
      output += "Fizz";
    }
    if (!(i % 5)) {
      output += "Buzz";
    }
    console.log(output || i); //empty string is false, so we short-circuit
  }
};

// ghetto pattern matching

var GhettoPatternMatching = function() {
  for (i = 1; i <= 100; i++) {
    console.log(
      {
        truefalse: "Fizz",
        falsetrue: "Buzz",
        truetrue: "FizzBuzz"
      }[!(i % 3) + "" + !(i % 5)] || i
    );
  }
};

(function rng(i) {
  return i ? rng(i - 1).concat(i) : [];
})(100)
  .map(function(n) {
    return n % 3 ? (n % 5 ? n : "Buzz") : n % 5 ? "Fizz" : "FizzBuzz";
  })
  .join(" ");

// ES6
// http://rosettacode.org/wiki/FizzBuzz#JavaScript
