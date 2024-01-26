"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(str) {
    return str.toUpperCase();
}
var signUp = function (email, passcode, cell) {
    return "Logged in as ".concat(email, " with cell as ").concat(cell);
};
var Login = function (email, isLoggedIn) {
    if (isLoggedIn === void 0) { isLoggedIn = false; }
    return isLoggedIn ? "Logged in Successfully" : "Cannot Log in";
};
//this is ambiguos and incorrect syntax
// function getValue(myval:number):boolean{
//     if(myval>5){
//         return true;
//     }
//     return "200 ok";
// }
var getHello = function (s) {
    return "";
};
var hero = ["iron man", "thor", "spiderman"];
hero.map(function (hero) {
    console.log("Hero is ".concat(hero));
    return "Hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
console.log(signUp("awatadeameya68@gmail.com", "1103", 7057868456));
console.log(Login("ameya", true));
console.log(Login("ayush"));
console.log(getUpper("ameya"));
console.log(addTwo(5));
