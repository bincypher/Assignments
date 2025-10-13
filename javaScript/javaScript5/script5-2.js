const radiuses = [3, 1, 2, 4];
function calculateArea(radius) {
  return Math.PI * radius * radius;
}
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

const areas = radiuses.map(calculateArea);
console.log(areas);
const circumferences = radiuses.map(calculateCircumference);
console.log(circumferences);