class Person
{
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName()
    {
        return this.firstName + " " + this.lastName;
    }

    set fullName(fullName)
    {
        let parts = name.split(" ");
        this.name = parts[0];
        this.lastName = parts[1];
    }
}

class Student extends Person
{
    constructor(name, lastName, id, grades)
    {
        super(name, lastName);
        this.id = id;
        this.grades = grades;
    }

    get studentInfo()
    {
        let avg = this._getAvg();
        return this.name + ' ' + this.lastName + ': ' + avg/grades.length;
    }
}

var p1 = new Person('John', 'Smith');
console.log(p1.fullName);

var s1 = new Student('Annie', 'Leonhardt', 1, [1, 2, 3, 4, 5, 6]);
console.log(s1.fullName);
