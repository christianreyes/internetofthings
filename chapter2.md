Chapter 2: Data
===========

I'll go over some of the fundamental data types which are shared among many programming languages. Data types are simply ways of storing information in a form that (hopefully) best represents the information the programmer is intending to store.

### Fundamental Data Types:

#### Number

Exmaples: ```0```, ```1```, ```2```, ```3.14```, ```-5```, ```Infinity```

#### String

Examples: ```"Hello World"```, ```"A"```

#### Boolean

```true```, ```false```

#### Array

An array (or list) stores a collection of data types. Items are accessed via their index (the number slot they are in the list). An array can even be part of an array. 

Example: ```["abc", 123, "456", [ "z", "y", "w"] ]```  
```"abc"``` is at index ```0```, ```123``` is at index ```1```, ```"456"``` is at index ```2```, and the array ```["z", "y", "w"]``` is at index ```3```.

#### Object

An object is a collection of keys and values. Objects are most commonly use to help store information that is related but accessed via a human-readable name. For instance, a "student" object could look like this

```javascript
{
  "firstName": "Billy",
  "lastName": "Smith",
  "age": 11,
  "interests": ["Fishing", "Space", "Legos"]
}
```

In this example, ```"firstName"``` is the "key" and the value associated with that key is ```"Billy"```. Similarly, the key ```"interests"``` has a value of an array, ```["Fishing", "Space", "Legos"]```.

#### Function

A function is a block of code that usually performs a specific task. Functions are usually defined whenever a set of instructions will be ran multiple times so that the same code doesn't need to be copied and pasted. For instance, if you had a Robot object that had only had a ```turnLeft``` function, and you wanted it to turn right, you would tell it to turn left three times:

```javascript
turnLeft();  
turnLeft();   // functions are invoked with parentheses 
turnLeft();
```

However, writing ```turnLeft()``` three times everytime you want to make the robot turn right can be problematic after a while because you could make a mistake and maybe only write it two times instead of three, or if you change how you want it to turn right, you will need to update the turn right code everywhere. To help increase the readability and accuracy of the code, you can define a function called ```turnRight``` which will run the three ```turnLeft()``` commands:

```javascript
function turnRight(){
  turnLeft();
  turnLeft();
  turnLeft();
}
```

To run the function, you would just write:

```javascript
turnRight();
```

Functions are data types just like the other data types above and can be stored into variables or keys in an object just like the other data types.

##### Function Parameters and Return Values

Functions are also unique in that they can receive inputs and return an output, the inputs are called parameters and have names and can be used inside the function. Let's make a function for adding two numbers:

```javascript
var add = function(number1, number2){
  return number1 + number2
};
```

In the ```add``` function which we saved to a variable, we pass in two parameters, ```number1``` and ```number2```. We then take those two numbers, add them, and then return the result.

Let's test our add function by passing it ```1``` and ```2```:

```javascript
add(1, 2)   // the result is 3
```

If we want to save the result to a variable, we would write: 

```javascript
var result = add(1,2)
```

Use functions in your programs to make the code more readable, but also to enable tasks to have variable inputs (i.e. the numbers are not hard-coded).

## Storing Data

In JavaScript, storing data is done through the keyword ```var``` along with the name of the variable. For example: if we wanted to store the number ```123``` in a variable named "magicNumber" we would write:

```javascript 
var magicNumber = 123
```

This can be done for any of the data types:

```javascript
var name = "Joe"

var bookCompleted = false

var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]

var topStudent = {
  "firstName": "Billy",
  "lastName": "Smith",
  "age": 11,
  "interests": ["Fishing", "Space", "Legos"]
}

```

If we wanted to get the first planet from our array and store it in a variable named "firstPlanet", we would write: 

```javascript
var firstPlanet = planets[0]
```

If we wanted to get the age of the "topStudent" and store it in a variable, we would write: 

```javascript
var topStudentAge = topStudent.age

// or 

var topStudentAge = topStudent["age"]
```

Variables can even use other variables

```javascript
var evenMoreMagicNumber = magicNumber * 2 // * means muultiply
```

[Chapter 3: Input and Output (I/O)](chapter3.md)

[Chapter 1: Introduction](chapter1.md)

