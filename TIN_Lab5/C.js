function Student(firstName, lastName, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.courses = ['english', 'computer science'];
}


function createStudent(firstName, lastName, id)
{
    return new Student(firstName, lastName, id);
}

console.log(createStudent('Tami', 'Anh', 1));

