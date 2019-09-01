const { solarSystemAsArray: planets } = require('./data/solar-system');
const names = require('./data/names');

// Check if recording is running with correct screen size

// Go through homework solution

{
  const fruitArray = ['banana', 'orange', 'apple', 'lime'];

  const fruitObject = {
    banana: {
      color: 'yellow',
      weight: 200,
    },
    orange: {
      color: 'orange',
      weight: 150,
    },
    apple: {
      color: 'red',
      weight: 120,
    },
    lime: {
      color: 'green',
      weight: 60,
    },
  };

  for (const fruit of fruitArray) {
    const color = fruitObject[fruit].color;
    const weight = fruitObject[fruit].weight;

    console.log(color);
    console.log(weight);
  }
}

// Explain JSON

// Explain arrow method

{
  // Function Declaration
  function sumDeclaration(a, b) {
    return a + b;
  }

  // Function Expression
  const sumFunction = function(a, b) {
    return a + b;
  };

  // Arrow function with brackets
  const sumArrow = (a, b) => {
    return a + b;
  };

  // Arrow function without brackets
  const sumArrowNoBrackets = (a, b) => a + b;

  // Arrow function with 1 argument
  const square = n => n * n;
}

// Filter names longer than 7 characters

// Filter names containing the letter f

// Do withoutSatellites filter exercise together, explain testing

// Let the class do the onlyFastMoving exercise
// Send repository to clone on Slack: https://github.com/wilgert/js2w2-exercises

// Map names to length

// Map names to first letter only

// Map names to lower case

// Let the class do the circumference exercise

// Reduce names to total number of letters

// Reduce names to total number of letter m

// Let the class do the totalMass exercise
