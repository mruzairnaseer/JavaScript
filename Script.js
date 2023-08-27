        // Progamming is a way to communicate with dumb computer which requires all the specific set of instructions to accuraely perform a task.
           
        /* ECMAScript is a standardized scripting language specification that defines the core features and syntax for languages like JavaScript.
        It plays a crucial role in ensuring consistency and interoperability across different implementations and environments, 
        allowing developers to write code that works across a wide range of platforms.*/

        /* JS is very Liberal means it always try to run and do something.It can Run on Browser's console 
        or using node js which is built on JS V8 Engine which converts the JS code directly into machine code, this is called JS Runtime.*/

        //// Variables are like containers, in JS the variable type can be changed in runtime which is called dynamically typed languages

/*
var a = "uzair";
{
var a = 5;
console.log(a);
}
console.log(a);
// Output shows value updated everywhere
*/


/*
let a = 67;
console.log(a);         //Output: 67             
 a="Uzair";              
 console.log(a);         //Output: Uzair
// Shows that let can be reinitialized with some other value
*/


/*
let a = 67;
console.log(a);         //Output: 67        
let a="Uzair";              
 console.log(a);         //Output: Error
// Shows that let can not be redeclared
*/


/*
const a = 67;
console.log(a);         //Output: 67       
a="Uzair";              
 console.log(a);         //Output: Error
// Shows that const can not be redeclared or initialized
*/

/*
const a = 67;
console.log(a);         //Output: 67     
{
const a = "Uzair";              
console.log(a);         //Output: Uzair 
}
console.log(a);
// Shows that const can be redeclared in any other block but no other condition is possible as redeclare and reinitialize isn't possible with const
*/

/*
var a                   // Don't gives Error
let b;                  // Don't gives Error
const c;                // Gives error
*/

                //Var is used in old codes, use const as much if it can't be used then let

//Primitive Data Types are of seven types: nn bb ss u

/*
let a = null;
let b = 67;
let c = true;
let d = BigInt(68);
let e = "Uzair"
let f = Symbol("I am a nice Symbol");
let g = undefined; //It's equal to let g alone which is also undefined
console.log(a,b,c,d,e,f,g);
console.log(typeof d);
*/

//Object is key value pairs which is non-primitive data type
/*
const item = {
        "Uzair" : true,
        "Shameer" : false,
        "number" : 67,
        "Something_Undefined" : undefined
}
console.log(item["Uzair"]);
*/

//console.log(start here!)