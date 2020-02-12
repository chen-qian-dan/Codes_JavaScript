/**
 * object, like dictionary in Python; 
 */
let person = {
    // properties
    name : "Qian",
    age : 35
}; 

// method 1
person.name = "Chen"; 
console.log(person.name);

// method 2
person["name"] = "Mary";
console.log(person["name"]);

person['name'] = "Mary";
console.log(person['name']);