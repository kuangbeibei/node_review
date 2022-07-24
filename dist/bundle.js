'use strict';

// 观察者模式
class Subject {
    constructor(name) {
        this.name = name;
        this.observers = [];
        this.state = "happy";
    }
    attach(o) {
        this.observers.push(o);
    }
    setState(newState) {
        this.state = newState;
        this.observers.forEach(o => o.update(this));
    }
}
class Observer {
    constructor(name) {
        this.name = name;
    }
    update(sub) {
        console.log(this.name + ' observe new update: ', sub.name + sub.state);
    }
}
let subject = new Subject('laobai');
let observer = new Observer('kk');
subject.attach(observer);
subject.setState(' wanna eat');
