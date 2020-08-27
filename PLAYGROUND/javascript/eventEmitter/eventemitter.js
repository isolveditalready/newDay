class EventEmitter {
    constructor() {
        this.events = {}
    }

    on(type, fn) {
        // if this type does not exist yet, initialize it
        if (!this.events[type]) {
            this.events[type] = []
        }
        this.events[type].push(fn)
    }

    emit(type, data) {
        // check if this event type exists
        if (!this.events[type]) return
        //call each function in tht event type array
        this.events[type].forEach(fn => fn(data))
    }

    remove(type, fn) {
        var eventFns = this.events[type]
        if (!eventFns) return
        var i = eventFns.indexOf(fn)
        if (i === -1) return
        eventFns.splice(i, 1)
    }
}

module.exports = EventEmitter;