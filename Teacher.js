document.writeln("<script  src='Student.js'></script>");

class Teacher extends Student{
    constructor (id,name,email,mobile_number,salary,subjects ){
        super(salary ,subjects);
        this.salary=salary;
        this.subjects=subjects;}
    }
    getsalary()
    {
        return `the salary is ${this.salary}`;
    }
    getsubjects()
    
    {
        return `the subject is ${this.subjects}`;
    }


    let teacher1=new Teacher(96432, "sadi ", "sadi@onratechange ", "077788888" , 800 ,["english","arabic","math","science"]);
    console.log(Teacher);
    console.log(teacher1);
    console.log(teacher1.getsalary());
    console.log(teacher.getsubjects());
