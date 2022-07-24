// 发布订阅 sub-pub
import fs from "fs";
import path from "path";

interface IEvents {
    arr: Array<() => void>,
    on: (fn: () => void) => void,
    emit: () => void
}

const events: IEvents = {
    arr: [],
    on: function (fn) {
        this.arr.push(fn)
    },
    emit: function () {
        console.log('emit', this.arr.length, JSON.stringify(person));
        if (this.arr.length === 2) {
            this.arr.forEach(fn => fn())
        }
    }
}

interface Iperson {
    name: string,
    age: string
}

let person: Partial<Iperson> = {}

fs.readFile(path.resolve(__dirname, '../doc/src1/name.txt'), (err, data) => {
    console.log('err name', err);
    person.name = data.toString()
    events.on(() => {
        console.log('我是在读取name.txt时候订阅的');
    })
    events.emit()
})

fs.readFile(path.resolve(__dirname, '../doc/src1/age.txt'), (err, data) => {
    console.log('err age', err);
    person.age = data.toString();
    events.on(() => {
        console.log('我是在读取age.txt时候订阅的');
    })
    events.emit()
})

