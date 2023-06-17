const isValid = function (string) {
  let iterations = string.length / 2;

  for (let i = 0; i < iterations; i++) {
    string = string.replace("()", "");
    string = string.replace("[]", "");
    string = string.replace("{}", "");
  }

  return string === "" ? true : false;
};
