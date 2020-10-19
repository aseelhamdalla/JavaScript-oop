document.writeln("<script  src='Teacher.js'></script>");


class Student {
constructor(id,name,email,mobile_number ){
this.id=id;
this.name=name;
this.email=email;
this.mobile_number=mobile_number;
}
getname(){
    return `the name is ${this.name}`;
}
getnumber(){
    return `the number is ${this.mobile_number}`;
}
}

let student1= new Student(123443, "sara ", "sara@onratechange ", 077777777);
console.log(Student);
console.log(student1.getname());
console.log(student1.getnumber());



  
