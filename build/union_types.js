"use strict";
function f(x) {
    if (typeof x === "number") {
        return x;
    }
    else {
        return x.reduce(function (a, b) { return a + b; });
    }
}
console.log(f(5));
console.log(f([1, 2, 2]));
//# sourceMappingURL=union_types.js.map