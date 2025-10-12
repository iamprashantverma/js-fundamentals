const person = {
    name:"Prashant Verma",
    age : 24,
    greet:function(){
        console.log(`hello, ${this.name}`)
    }
}
// accessing the value two ways
console.log(person.name);
console.log(person["age"]);

// deleting the properties 
delete person.age;
console.log(person)

// adding properties
person.name = "Dipanshu";
console.log(person);

// checking object properties
console.log(person.hasOwnProperty("name"));

// iterating through object
for (let key in person) {
    console.log(key,person[key]);
}

// combing objects
const obj1 = {a:'a', b:'b'};
const obj2 = {1:'a',c:'c'};
// const obj3 = {obj1,obj2};
// const obj3 = Object.assign({},obj1,obj2);

// const obj3 = {...obj1,...obj2};
// console.log(obj3)

// destructuring with default values 
// const {name,roll_No = "14"} = person;
// console.log(roll_No);

// how to pass default params
function sum(a, b = 23) {
    return a + b;
}
console.log(sum(person,2,1));
