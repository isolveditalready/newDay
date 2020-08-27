//var task = {}
// OR
//var task = Object.create(Object.prototype)
// OR
//var task = new Object();

var task = {
    title: 'My task',
    description: 'My Description'
}

task.toString = function () {
    return `${this.title}  ${this.description}`
}

console.log(task.toString())