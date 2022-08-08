const user = {
    name : "Don",
    age:30
};

const copied = {... user,age:60 ,ocupation:"Web developer"};

console.log(copied);