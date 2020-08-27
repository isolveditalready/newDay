const Emitter = require('./eventemitter')

const emtr = new Emitter();

emtr.on('greet', () => console.log('greeting sucks'))

const reply = () => console.log('hi')
emtr.on('greet', reply)

console.log('hello')
emtr.emit('greet')