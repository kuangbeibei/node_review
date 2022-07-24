// 写一个通用柯里化函数，将给一个函数传递过个参数的功能，变成多次传参，来实现上一个判断数据类型的功能
// 暂存变量
// 一般用柯里化，都是预先知道有多少个参数的情况。

function currying(fn: any) { // 通用柯里化，预先暂存参数
    function exec(sumArgs: any) { // 暂存合并到上一次的参数中
        if (sumArgs.length >= fn.length) { // 通过已知参数个数来判断
            console.log('sumargs', ...sumArgs);

            return fn(...sumArgs)
        } else {
            console.log('here', ...sumArgs);

            return (...args: any[]) => {
                console.log('args', ...args);

                return exec([...sumArgs, ...args])
            }
        }
        // return sumArgs.length >= fn.length ? fn(...sumArgs) : (...args: any[]) => exec([...sumArgs, ...args])
    }
    return exec([])
}

function sum(a: number, b: number, c: number, d: number) {
    return a + b + c + d
}

// console.log('currying(sum)', currying(sum));


function isType(type: string, val: unknown) {
    return Object.prototype.toString.call(val) === `[object ${type}]`
}

const isString = currying(isType)('String');
const isBoolean = currying(isType)('Boolean');

console.log('isString', isString(123));

