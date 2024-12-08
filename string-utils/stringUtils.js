const reverseString = (str) => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  let res = "";
  for (let i = str.length - 1; i >= 0; --i) {
    res += str[i];
  }

  return res;
};

const capitalize = (str) => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str[0].toUpperCase() + str.slice(1);
};

const truncate = (str, len) => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return str.length > len ? str.slice(0, len) + "..." : str;
};

module.exports = {
  reverseString: reverseString,
  capitalize: capitalize,
  truncate: truncate,
};
