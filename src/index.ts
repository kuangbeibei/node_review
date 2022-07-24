
import fs from "fs";
import path from "path";

// 观察者模式

class Subject {
    name;
    observers: Observer[]
    state;
    constructor(name: string) {
        this.name = name
        this.observers = []
        this.state = "happy"
    }
    attach(o: Observer) {
        this.observers.push(o)
    }
    setState(newState: string) {
        this.state = newState;
        this.observers.forEach(o => o.update(this))
    }
}

class Observer {
    name;
    constructor(name: string) {
        this.name = name
    }
    update(sub: Subject) {
        console.log(this.name + ' observe new update: ', sub.name + sub.state);
    }
}

let subject = new Subject('laobai');
let observer = new Observer('kk');
subject.attach(observer);
subject.setState(' wanna eat')