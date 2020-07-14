(function () {
    var _ = LifeView = function (table, size) {
        this.grid = table;
        this.size = size;

        this.started = false;
        this.createGrid();
    }

    _.prototype = {
        createGrid: function () {
            var me = this;
            var fragment = document.createDocumentFragment();
            this.grid.innerHTML = '';
            this.checkboxes = []

            for (var y = 0; y < this.size; y++) {
                var row = document.createElement('tr');
                this.checkboxes[y] = [];

                for (var x = 0; x < this.size; x++) {
                    var cell = document.createElement('td');
                    var checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    this.checkboxes[y][x] = checkbox;

                    cell.appendChild(checkbox);
                    row.appendChild(cell)
                }
                fragment.appendChild(row);
            }
            this.grid.addEventListener('change', function (e) {
                if (e.target.nodeName.toLowerCase() == 'input') {
                    me.started = false;
                }
            })

            this.grid.appendChild(fragment)
        },

        get boardArray() {
            return this.checkboxes.map(function (row) {
                return row.map(function (checkbox) {
                    return +checkbox.checked;
                });
            });
        },

        play: function () {
            this.game = new Life(this.boardArray);
            this.started = true;
        },

        next: function () {
            var me = this;

            if (!this.started || this.game) {
                this.play();
            }
            this.game.next();
            var board = this.game.board;

            for (var y = 0; y < this.size; y++) {
                for (var x = 0; x < this.size; x++) {
                    this.checkboxes[y][x].checked = !!board[y][x];
                }
            }

            // if auto play is on, call itself
            if (lifeView.autoplay) {
                setTimeout(function () {
                    me.next();
                }, 500)
            }

        }
    }
})()