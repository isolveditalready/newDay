const express = require('express')
const app = express()

const events = require('events')
const myEmitter = new events.EventEmitter();

function c1() {
    console.log('an event occurred')
}

function c2() {
    console.log('yet another shit happened')
}

myEmitter.on('eventOne', c1)
myEmitter.on('eventOne', c2)
myEmitter.emit('eventOne')

/*
app.get('/', (req, res) => {
    console.log("welcome to the jungle")
    res.send('welcome to the jungle')
})
app.listen('8801', () => {
    console.log(`listening on port 8801`)
})
*/