"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var ameya = { name: "ameya", id: 334 };
ameya = { username: "ava", id: 334 };
//either 1 type possible
function getDbid(id) {
    console.log("dbid is ".concat(id));
}
//check for either one of the type
function getdbnewid(id) {
    if (typeof id === "string") {
        id.toLowerCase();
        return id;
    }
    if (typeof id === "number") {
        return id * id;
    }
}
getDbid(3);
getDbid("3");
//types of mixed element datatypes
var data = [1, 2, 3, 4];
var data1 = ["1", "2", "3"];
var data2 = ["1", "2", 3, true];
var seatAllotment;
seatAllotment = "aisle"; //allowed
