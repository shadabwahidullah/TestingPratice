function stringLength(string) {
  if (string.length >= 1 && string.length <= 10) {
    return string.length;
  } else {
    throw "your string is either longer or shorter";
  }
}
function reverseString(string) {
  return string.split("").reverse().join("");
}

module.exports.length = stringLength;
module.exports.reverse = reverseString;
