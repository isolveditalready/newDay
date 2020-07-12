const numbers = [1, 2, 3];

console.log("start");

forEach(numbers, function (number) {
  console.log(number * 2);
});

console.log("end");
function forEach(items, cb) {
  console.log("letgo");
  for (const item of items) {
    setTimeout(function () {
      cb(item);
    });
  }
}
