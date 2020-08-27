var Repo = require('./taskRepository')

var Task = function (data) {
    console.log("newing up task repo")
    this.name = data.name;
    this.completed = false;
}

Task.prototype = {
    complete: function () {
        console.log(`completing task ${this.name}`)
        this.completed = true;
    },
    save: function () {
        Repo.save(this)

    }
}

module.exports = Task