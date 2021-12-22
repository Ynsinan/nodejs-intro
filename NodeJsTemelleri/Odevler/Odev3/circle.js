function circleArea(radius) {
  const area = Math.PI * Math.pow(radius, 2);
  console.log(area);
}

function circleCircumference(radius) {
  const perimeter = 2 * Math.PI * radius;
  console.log(perimeter);
}

module.exports = {
  circleArea: circleArea,
  circleCircumference: circleCircumference,
};
