// Use object initializer to create an object, it should have at least 2-3 fields and 2-3 methods. Write a function accepting the object as a parameter and printing all its properties and their types
let person = {
    name: 'John',
    surname: 'Smith',
    age: 35,
    
    greet() {
        console.log('Hello!');
    },
    goodbye() {
        console.log('Bye!')
    }
};

function show(obj)
{
    for(let propt in obj)
    {
        console.log(propt + ': ' + obj[propt]);
    }
}

show(person);