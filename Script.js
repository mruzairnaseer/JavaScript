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

/*s

// Chapter 1 - Q1
let a = "Harry"
let b = 6
console.log(a + b) // Concatination is done here giving output Harry6

// Chapter 1 - Q2
console.log(typeof (a+b)) // Gives the type after concatination which string

// Chapter 1 - Q3
const a1 = {    //a1 is a const which can't be change but the value it is pointing to can be changed, consider a1 as a pointer whose value doesn't change but the of other data type(obj) can be change
  name: "Harry",
  section: 1,
  isPrincipal: false
}
// a1 = 45   //It gives error as const can't be changed 
// a1 = {}   //Also gives error as a new object is assigning which isn't possible in const

// Chapter 1 - Q4
a1['friend'] = "Shubham"  // It is possible because we are updated the object not a1 which is const
a1['name'] = "Lovish"  
console.log(a1) // Gives { name: 'Lovish', section: 1, isPrincipal: false, friend: 'Shubham' }

// Chapter 1 - Q5
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work."
}

console.log(dict.yakka) // dict.yakka is used to access the values of an object

*/

/*
// Arithmetic Operators 
let a = 10;
let b = 4;
console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a / b = ", a / b)
console.log("a ** b = ", a ** b) //power
console.log("a % b = ", a % b)
console.log("++a = ", ++a) // first increment then display
console.log("a++ = ", a++) // first display then increment 
console.log("--a = ", --a)
console.log("a-- = ", a--)
console.log("a = ", a)
console.log("a-- = ", a--)

// Assignment Operators 
let assignment = 1;
assignment += 5 // same as assignment = assignment + 5
console.log("a is now = ", a)
assignment -= 5 // same as assignment = assignment - 5
console.log("a is now = ", a)
assignment *= 5 // same as assignment = assignment * 5
console.log("a is now = ", a)
assignment /= 5 // same as assignment = assignment / 5
console.log("a is now = ", a)

// Comparison Operators 
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2) //check value not type
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2) //check value plus type
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5)
console.log(x>y || x==5)
console.log(!false)
console.log(!true)

// Comments
// This is a single line comment
//  This is a sample multiline comment and a tutorial
// from 
// codewithharry 
*/

//console.log(start here!)