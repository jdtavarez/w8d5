function curriedSum(numArgs) {
    var numbers = [];

    return function _curriedSum(num) {

        function reducer(acc,el) {
            return acc + el;
        };

        numbers.push(num);
        if (numbers.length === numArgs) {
            return numbers.reduce(reducer);
        } else {
            return _curriedSum;
        }
    };
};

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

Function.prototype.curry = function(numArgs) {
    var args = [];
    var fx = this;

    return function _curry(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            return fx(...args);
        } else {
            return _curry;
        }
    };

};