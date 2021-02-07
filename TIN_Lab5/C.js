function Student(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.courses = ['english', 'computer science'];
}
//for b 
function createStudent(firstName, lastName, id)
{
    return new Student(firstName, lastName, id);
}

console.log( reateStudent('Smithy', 'Johny', 1));

