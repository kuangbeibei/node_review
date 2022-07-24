// Using High Order Function to realize a "before doing" function, like an AOP

type Tcallback = () => void;
type TreturnFn = (...args: any[]) => void;

interface Function {
    before(fn: Tcallback): TreturnFn
}

Function.prototype.before = function (beforeCallback) {
    return (...args) => {
        beforeCallback();
        this(...args)
    }
}

function beforeFn() {
    console.log('doing something before core script...');

}

function coreFunc(...args: any[]) {
    console.log('executing core script...', ...args);
}

const finalFn = coreFunc.before(beforeFn);

finalFn(1,2,3)
