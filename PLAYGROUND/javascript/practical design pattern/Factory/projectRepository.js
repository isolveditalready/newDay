var repo = function () {
    var db = {};

    get = function (id) {
        console.log(`Getting Project  ${id}`)
        return {
            project: {
                name: 'New Project'
            }
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