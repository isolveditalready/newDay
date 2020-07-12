(function () {
  console.log("let the game begin");
  var _ = (self.Life = function (seed) {
    this.seed = seed;
    this.height = seed.length;
    this.width = seed[0].length;
    let newarrayme = [
      [1, 2],
      [3, 4],
      [5, 6]
    ]

    this.prevBoard = []
    this.board = cloneArray(seed)
    //this.prevBoard = seed.slice().map(function (row) {
    //  return row.slice();
    //});
    // es6
    // this.prevBoard = [...seed]
    // console.log();
  });

  _.prototype = {
    next: function () {
      this.prevBoard = cloneArray(this.board)
      console.log("1__________________________")
      console.log(this.prevBoard)
      console.log("x__________________________")
      console.log("we got next")

      for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
          let neighbors = this.aliveNeighbors(this.prevBoard, x, y)
        }
      }
    },

    aliveNeighbors: function (array, x, y) {
      console.dir(array)
      console.log(array[1][2])
      console.log("x is " + x)
      console.log("y is " + y)
      console.log(typeof array)
      var neighbors = [
        array[y - 1][x - 1], array[y - 1][x], array[y - 1][x + 1],
        array[y][x - 1], array[y][x + 1],
        array[y + 1][x - 1], array[y + 1][x], array[y + 1][x + 1]
      ]
    },

    toString: function () {
      return this.board.map((row) => {
        return row.join(' ');
      }).join('\n')
    }

  };

  function cloneArray(array) {
    return array.slice().map(function (r) {
      return r.slice();
    })
  }
})();

var game = new Life([
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
]);
console.log("_____________")
console.log(game + ' ')
console.log("_____________")
console.log(game + ' ')
game.next()
console.log(game)