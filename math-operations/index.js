const { add, subtract, multiply, divide } = require("./mathOperations");

try {
  console.log(add(5, 3));
  console.log(subtract(5, 3));
  console.log(multiply(5, 3));
  console.log(divide(5, 3));
  console.log(divide(5, 0));
} catch (error) {
  console.error(error.message);
}
