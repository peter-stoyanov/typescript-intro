interface Person {
    age: number,
    name: string,
    say(): string
}

let mike = {
    age: 25, 
    name:"Mike", 
    say: function() { 
        return "My name is " + this.name + 
               " and I'm " + this.age + " years old!"
    }
}

/**
 * This calls say() from Person
 * @param person The person to add.
 */
function sayIt(person: Person) {
    return person.say();
}

console.log(sayIt(mike))