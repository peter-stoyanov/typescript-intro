"use strict";
var mike2 = {
    age: 25,
    name: "Mike",
    say: function () {
        return "My name is " + this.name +
            " and I'm " + this.age + " years old!";
    }
};
function sayIt2(person) {
    return person.say();
}
console.log(sayIt2(mike2));
//# sourceMappingURL=app.js.map