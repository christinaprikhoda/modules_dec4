const { formatDate, isWeekend, daysBetween } = require("./dateUtils");

console.log(formatDate(new Date('2024-12-08'), 'YYYY-MM-DD'));
console.log(isWeekend(new Date('2024-12-07')))
console.log(daysBetween(new Date('2024-12-01'), new Date('2024-12-08')))
