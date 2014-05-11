Chapter 3: Storing Data
=============

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
