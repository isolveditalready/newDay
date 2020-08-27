const e = require('./basicEventEmitter')

console.log(e.myEmitter)
e.myEmitter.emit('eventOne')