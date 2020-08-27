var Task = function (name) {
    this.name = name;
    this.completed = false;
}

Task.prototype = {
    complete: function () {
        console.log(`completing task ${this.anme}`)
        this.completed = true;
    },
    save: function () {
        console.log(`saving data ${this.name}`)
    }
}

module.exports = Task;