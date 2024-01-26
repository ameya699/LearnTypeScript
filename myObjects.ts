const User={
    name:"ameya",
    email:"ameya@google.com",
    isActive:true
}

function createUser({name:string,isPaid:boolean}){
}

//specific object return type

function createCourse({name:string,isPaid:boolean}){}

//if extra paramter is passed to a function

let newUser={
    name:"ameya",
    isPaid:false,
    email:"ameya@gmail.com"
};



createCourse(newUser);
// console.log(createCourse())
createUser({name:"ameya",isPaid:false});



//define custom object type

type User={
    name:string,
    email:string,
    isActive:boolean
}


function createnewUser(user:User):User{
    return {name:user.name,email:user.email,isActive:user.isActive}
}

const data:User=createnewUser({name:"amu",email:"amu@gmail.com",isActive:true});
console.log(data);

type cardNumber={
    cardnumber:string
}

type cardDate={
    cardDate:string
}

//this is done to combine and use the already defined types and also add another without using a already defined type
type cardDetails =cardNumber & cardDate &{
    cvv : number
}

//readonly prevents assignment here the _id usually in mongo db usecase
type newUserType = {
    readonly _id:string
    name:string,
    email:string,
    isActive:boolean,
    credcarddetails?:number //this allows us to keep this paraeter as optional
}

let myUser:newUserType={
    _id:"12456",
    name:"h",
    email:"email.com",
    isActive:false,
    
}

// myUser._id="12" not allowed as we have marked it readonly.

export{}