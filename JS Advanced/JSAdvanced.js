function paraTxtChange(){
    return  document.getElementById("para").innerHTML= "Para changed"    //this is simple function or non Arrow function.
}

paraChange=()=> { 
    paraTxtChange();
    document.getElementById("para").style.fontSize= "24px"  //this is Arrow function.
    document.getElementById("paraChanger").innerHTML="Done"
}

var isOff = true;
bulbSwitch=()=> {
    if(isOff){document.getElementById("bulb").src="https://www.w3schools.com/js/pic_bulbon.gif"
              document.getElementById("switch").innerHTML="Switch OFF"  
        isOff = false;
    }
    else {
        document.getElementById("bulb").src="https://www.w3schools.com/js/pic_bulboff.gif" 
        document.getElementById("switch").innerHTML="Switch ON"  
        isOff = true;
    }
           
}

//In JS redeclaring the variable will not destroy the value stored.
//Array and Object declaration in JS.
var arr = ["This", "is", "Array"];
var object = {
    arr,
    i:10,
    string: "Beautiful"
};

/* 
accessing objects property *using .property  or *using [property].
but to access functions in an object we need either object.function() -method- or object.function -property.
Accessing a function without () will always return function definition instead of it's result.
endUptoFunctions */

/* 
Backslash before quotes accepts it as quotes
string.length
string.indexOf("text") shows first occurence of the "text"
string.match(/text/g) g stands for - global, hence it searches for text globally and returns if found
string.replace("text", "new text")
toUpperCase() and toLowerCase()
string.split("splitter") -imp- splits the string for splitter and returns an array
endUptoSrings 
*/

/*
Accessing Array -just type the array n u will get comma seperted elements.
arr.length
arr[arr.length] = newElement. -to add an element at the end-
arr instanceOf Array -returns true.
Array.isArray(arr) -returns true.
endUptoArrayBasics
*/
/*
Array Metods
.push(ele) -adds an element.
.pop(ele) - rems last ele.
arr.join("joint") -returns sring of eles joined by joint.
arr1.concat(arr2, arr3)
arr.splice()
arr.toString()
arr.unshift(ele) -adds ele at begining.
arr.shift() -rems the ele at begining.
arr.slice(startIndex, endIndex) -returns a sub array not inclds last ele.
endUptoarrayMethods 
*/
/*
Array Iteration
arr.sort()
arr.reverse()
arr.forEach()
arr.map()
arr.filter()
arr.reduce()
arr.every()
arr.some()
arr.indexOf()
arr.lastIndexOf()
arr.find()
arr.findIndex()
endUptoArraysIteration
*/
/*
typeOf(var)
var.constructor
-converting nums into strings:
    -String(int)
    -var.toString()
Home made isArray() and isDate()    
*/
/*Boolean
Boolean(condition) returns true or false.
The boolean value of 0, empty String, undefined, NaN, null and false is false.
*/
/*
JavaScript conditionals
Switch cases
*/
/* 
Looping through Objects ... [ for...in approach]
obj = {var1 = 1, var2 = 2 }
for(var x in obj){
    console.log(obj[x])
    // if we use obj.x - it is undefined.
}
endUptoJSloops
*/

/* 
JS Err Handling 
- try catch
- confirm box 
*/
/*
JS Objects
create using new keyword
    * var person = new Object();
    person.name = "Mayank Meena"

creating JS objects using constructor    
- function Person(fName, lName, age){
    this.fristName = fname;
    this.lastName = lName;
    this.age = age;
}

    var member1 = new Person(Mohan, Meena, 30);
    // now member1 (Object) has properties with firstname, lastname and age.

Similarly we can create JS Objects with inbuilt objects must see - https://www.w3schools.com/js/tryit.asp?filename=tryjs_object_builtin
delete Obj.property;
endUptoJSobjects
    */
