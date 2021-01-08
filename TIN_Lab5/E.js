class Student
{
    constructor(name, lastName, id, grades)
    {
        this._name = name;
        this._lastName = lastName;
        this.id = id;
        this.grades = grades;
    }

    get fullName()
    {
        return this._name + " " + this._lastName;
    }

    set fullname(fullName)
    {
        let parts = name.split(" ");
        this.name = parts[0];
        this.lastName = parts[1];
    }

    get studentInfo()
    {
        let avg = this._getAvg();
        return this.name + ' ' + this.lastName + ': ' + avg/grades.length;
    }
}

var student = new Student('John', 'Smith', 1, [1, 2, 3, 4, 5, 6]);
student.fullname('Annie Leonhardt');
console.log(student.fullName);