// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

const isValid = function (string) {
  iterations = string.length / 2;
  for (let i = 0; i < iterations; i++) {
    string = string.replace("()", "");
    string = string.replace("[]", "");
    string = string.replace("{}", "");
  }
  return string === "" ? true : false;
};
