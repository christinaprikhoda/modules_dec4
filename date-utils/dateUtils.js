function formatDate(date, format) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return format.replace("DD", day).replace("MM", month).replace("YYYY", year);
}
function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}
function daysBetween(date1, date2) {
  const diff = Math.abs(date1 - date2);
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
module.exports = { formatDate, isWeekend, daysBetween };
