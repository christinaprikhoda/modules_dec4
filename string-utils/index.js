const { reverseString, capitalize, truncate } = require("./stringUtils");

try {
  console.log(reverseString("hello"));
  console.log(capitalize("hello"));
  console.log(truncate("Hello, this is a test string.", 10));
} catch (error) {
  console.error(error.message);
}
