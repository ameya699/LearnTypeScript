let score : number | string =33

score=44;
score="55";

type User={
    name:string;
    id:number
}

type Admin={
    username:string;
    id:number
}

let ameya:User|Admin={name:"ameya",id:334}
ameya={username:"ava",id:334}

//either 1 type possible
function getDbid(id:number|string){
    console.log(`dbid is ${id}`);
}

//check for either one of the type
function getdbnewid(id:number|string){
    if(typeof id==="string"){
        id.toLowerCase();
        return id;
    }
    if(typeof id==="number"){
        return id*id;
    }
}

getDbid(3);
getDbid("3");
//types of mixed element datatypes
const data:number[]=[1,2,3,4]
const data1:string[]=["1","2","3"]
const data2:(string| number | boolean)[]=["1","2",3,true]

let seatAllotment:"aisle"|"middle"|"window";
seatAllotment="aisle"//allowed
// seatAllotment="random" not allowed
export {}