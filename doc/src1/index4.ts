
import fs from "fs";
import path from "path";

// 柯里化实践

function after(times: number, callback: (o: any) => void) {
    let obj = {} as any;
    return function (key: string, value: any) {
        obj[key] = value;
        --times === 0 && callback(obj)
    }
}

const fn = after(2, (obj) => {
    console.log('obj: ', obj);
})


// 这个路径是放在dist目录下的bundle.js中运行，所以是按照后者的位置去找的
fs.readFile(path.resolve(__dirname, '../doc/src1/name.txt'), (err, data) => {
    console.log('err name', err);
    fn('name', data.toString())
})

fs.readFile(path.resolve(__dirname, '../doc/src1/age.txt'), (err, data) => {
    console.log('err name', err);
    fn('age', data.toString())
})

