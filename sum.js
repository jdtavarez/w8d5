function sum1() {
    let nums = [].slice.call(arguments);
    const reducer = function (acc, el) {
        return acc + el;
    };
    return nums.reduce(reducer);
};
function sum2(...args) {
    const reducer = function (acc, el) {
        return acc + el;
    };
    return args.reduce(reducer);
};