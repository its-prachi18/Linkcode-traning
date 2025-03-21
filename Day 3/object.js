const student={
    name: 'Prachi',
    lastName: 'Narkar',
    age: 22,
    address:{
        city:'Pune'
    },
    //Using function
    getName: function()
    {
        return this.name + this.lastName;
    }
}
console.log('\n',student.getName())

//Accessing properties
console.log('\n',student.name);

//adding properties
student.experience = "2 months";
console.log('\n',student);

//delegting properties
delete student.age;
console.log('\n',student);