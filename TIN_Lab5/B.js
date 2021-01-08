function Student(name, lastName, id, grades)
{
    this.name =  name;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
    //Math.min(...[1,2,3,4]) is the same as Math.min(1,2,3,4)
    this.getStudentInfo = function()
    {
        let avg = 0;
        for(i = 0; i < this.grades.length; i++)
        {
            avg += this.grades[i];
        }

       return this.name + ' ' + this.lastName + ': ' + avg/grades.length;
    }
}

let std = new Student('John', 'Smith', 1, [1, 2, 3, 4, 5, 6]);
console.log(std.getStudentInfo());