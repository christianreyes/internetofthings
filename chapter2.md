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

[Chapter 1: Introduction](chapter1.md)

