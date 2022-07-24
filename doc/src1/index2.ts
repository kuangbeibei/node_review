// Currying Function，就是让函数的功能更具体。Pre set paramter for future use

type TType = 'isString' | 'isNumber' | 'isBoolean'

type ReturnFn = (val: unknown) => boolean;

type TUtils = Record<TType, ReturnFn>;

const utils = {} as TUtils;

function isType(type: string) {
    return function (val: unknown) {
        return Object.prototype.toString.call(val) === `[object ${type}]`;
    }
}

['String', 'Number', 'Boolean'].forEach((type) => {
    const _type = `is${type}` as TType;
    utils![_type] = isType(type);
})

console.log(utils.isBoolean(2));

export {}