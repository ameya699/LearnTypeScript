"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "ameya",
    email: "ameya@google.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
//specific object return type
function createCourse(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
//if extra paramter is passed to a function
var newUser = {
    name: "ameya",
    isPaid: false,
    email: "ameya@gmail.com"
};
createCourse(newUser);
// console.log(createCourse())
createUser({ name: "ameya", isPaid: false });
function createnewUser(user) {
    return { name: user.name, email: user.email, isActive: user.isActive };
}
var data = createnewUser({ name: "amu", email: "amu@gmail.com", isActive: true });
console.log(data);
var myUser = {
    _id: "12456",
    name: "h",
    email: "email.com",
    isActive: false,
};
