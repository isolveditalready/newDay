EventEmitter = require('EventEmitter')
console.log("matrix")
class WithTime extends EventEmitter {
    execute(asyncFunc, ...args) {
        this.emit('begin');
        console.time('execute');
        this.on('data', (data) => console.log(`got data ${data}`));
        asyncFunc(...args, (err, data) => {
            if (err) {
                return this.emit('error', erro)
            }

            this.emit('data', data)
            console.timeEnd('execute')
            this.emit('end')
        })

    }
}