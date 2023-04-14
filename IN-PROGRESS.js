const isValid = function (string) {
  const a = Array.from(string);

  // TODO: Check if character exists in order to define array

  // Define empty arrays

  const leftPar = [];
  const rightPar = [];
  const leftBra = [];
  const rightBra = [];
  const leftCur = [];
  const rightCur = [];

  // Create arrays of the indexes of the characters

  for (const [index, element] of a.entries()) {
    if (element === "(") {
      leftPar.push(index);
    } else if (element === ")") {
      rightPar.push(index);
    } else if (element === "[") {
      leftBra.push(index);
    } else if (element === "]") {
      rightBra.push(index);
    } else if (element === "{") {
      leftCur.push(index);
    } else if (element === "}") {
      rightCur.push(index);
    }
  }

  // console.log(leftPar);
  // console.log(rightPar);
  // console.log(leftBra);
  // console.log(rightBra);
  // console.log(leftCur);
  // console.log(rightCur);

  // Check if there is equal number of open and close parentheses

  if (
    leftPar.length === rightPar.length &&
    leftBra.length === rightBra.length &&
    leftCur.length === rightCur.length
  ) {
    // Define counters

    let counterPar = 0;
    let counterBra = 0;
    let counterCur = 0;

    // Check if all parentheses are opened and closed in the right order

    for (let i = 0; i < leftPar.length; i++) {
      if (leftPar[i] < rightPar[i]) counterPar++;
    }

    for (let i = 0; i < leftBra.length; i++) {
      if (leftBra[i] < rightBra[i]) counterBra++;
    }

    for (let i = 0; i < leftCur.length; i++) {
      if (leftCur[i] < rightCur[i]) counterCur++;
    }
    if (
      counterPar === leftPar.length &&
      counterBra === leftBra.length &&
      counterCur === leftCur.length &&
      !(rightPar[0] - leftPar[0]) % 2 == 0 &&
      !(rightBra[0] - leftBra[0]) % 2 == 0 &&
      !(rightCur[0] - leftCur[0]) % 2 == 0
    ) {
      // return true;
      console.log(`true`);
    } else {
      // return false;
      console.log(`false`);
    }
  } else {
    // return false;
    console.log(`false`);
  }
};

isValid("{([()])}");
