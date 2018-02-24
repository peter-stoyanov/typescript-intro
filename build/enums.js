"use strict";
var Color;
(function (Color) {
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Red"] = 8] = "Red";
    Color[Color["Blue"] = 9] = "Blue";
})(Color || (Color = {}));
;
var c;
c = Color.Green;
var d = Color.Blue;
console.log(c);
console.log(d);
console.log(Color[8]);
//# sourceMappingURL=enums.js.map