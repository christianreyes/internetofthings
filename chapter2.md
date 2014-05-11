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

[Chapter 3: Storing Data](chapter3.md)

[Chapter 1: Introduction](chapter1.md)

