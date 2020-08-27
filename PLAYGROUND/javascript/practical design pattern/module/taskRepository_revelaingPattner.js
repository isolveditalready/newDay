const {
    get
} = require("./taskRepository");

var repo = function () {
    var db = {};

    get = function (id) {
        console.log(`Getting task ${id}`)
        return {
            name: 'new task from db'
        }
    }

    save = function (task) {
        console.log(`Saving ${task.name} to the db`)
    }

    return {
        get: get,
        save: save
    }
}

module.exports = repo();