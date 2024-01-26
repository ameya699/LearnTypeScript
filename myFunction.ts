function addTwo(num:number){
    return num+2;
}

function getUpper(str :string){
    return str.toUpperCase();
}

const signUp=(email :string,passcode:string,cell:Number)=>{
    return `Logged in as ${email} with cell as ${cell}`;
}

const Login=(email:string,isLoggedIn:boolean=false)=>{//adding isloggedin = false to avoid error on pasing single param
    return isLoggedIn? "Logged in Successfully":"Cannot Log in";
}

//this is ambiguos and incorrect syntax
// function getValue(myval:number):boolean{
//     if(myval>5){
//         return true;
//     }
//     return "200 ok";
// }

const getHello=(s:string):string=>{
    return ""
}

const hero=["iron man","thor","spiderman"];
hero.map((hero):string=>{
    console.log(`Hero is ${hero}`);
    return `Hero is ${hero}`
})

//specify that nothing would be returned.
function consoleError(errmsg:string):void{
    console.log(errmsg);
}

//when your function never return a value not even a void
function handleError():never{
    throw Error("This is a custom error");
}

console.log(signUp("awatadeameya68@gmail.com","1103",7057868456));
console.log(Login("ameya",true));
console.log(Login("ayush"));
console.log(getUpper("ameya"));
console.log(addTwo(5));


export {}