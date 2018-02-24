let myType = { name: "Zia", id: 1 };

//Case 1: can only assign a type which has the the same properties
//Object literals can only have properties that exist in contextual type
myType = { id: 2,  name: "Tom" };

//Case 2a: Error, renamed or missing property
myType = { id: 2,  name_person: "Tom" };

//Note now 'x' can have any name, just that the property should be of type string
var x: { id: number, [x: string]: any };

// Ok, `fullname` matched by index signature
x = { id: 1, fullname: "Zia", someName: "asasas" };  