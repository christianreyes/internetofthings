Chapter 3: Flow Control
===========

Now that we know how to store data, let's use it to tell the computer to execute certain instructions based on what the data was. This is called flow control. There are various statements / keywords that tell the computer to behave in certain ways.

#### if, else, 

The ```if``` statement tells the computer to execute the code in the following block (the code in between the braces) if the condition in the ```if``` statement is true (normally a boolean condition).

```javascript
if( condition == true ){
  // code which will be executed if the condition is true
}
```

```if``` statements can be followed by an ```else``` statement which will execute the block after the ```else``` statement if the condition in the ```if``` statement is false.

```javascript
if( condition == true ){
  // code which will be executed if the condition is true
} else {
  // code which will be executed if the condition is false
}
```

You can also chain ```if``` and ```else``` statements in the following way (example below):

```javascript
if( number == 1){
  // number is 1
} else if ( number == 2){
  // number is 2
} else if ( number == 3){
  // number is 3
} else {
  // number isn't any of the above
}
```

#### switch, case

Extending from the example with the numbers above, checking for each value in an if else can be a hassle to read and to understand. Fundamentally, we are trying to execute code based on the value of a variable. The ```switch``` statement allows us to do just that (with a list of different ```case``` statements for the possible values and a ```default``` statement if the value isn't any of the values. (Note: the ```break``` statement must be contained within the ```case``` statement block to tell the program to get out of the ```switch``` statement code block.

```javascript
switch( number ){
  case 1:
    // number is 1
    break;
  case 2:
    // number is 2
    break;
  case 3:
    // number is 3
    break;
  default:
    // number is none of the above
    break;
}
```

#### for loop

The ```for``` statement allows a block of code to run a certain number of times based on certain conditions. One typical usage of a ```for``` loop is to iterate over the values of an array.

```javascript
// pseudo-code
for( temporary variable initialization ; condition ; code to execute after each run){
  // code to be executed as long as the condition in the for loop is true
}
```

Let's assume we have an array named ```originals``` and another array named ```modified```. We will intialize the arrays and then iterate over all the originals, multiplying each number by ```-1``` and setting it in the modified array.

```javascript
var originals = [2,4,6,8,10]
var modified  = []

// temporary index ; condition to continue           ; increment the index by 1 after every iteration
//                 ; as long as the index is valid 
for( var i = 0 ; i < originals.length ; i++ ){
  var number = originals[i] // copy the number at index i
  var modifiedNumber = number * -1 // change the number
  
  modified.push(modifiedNumber) // add the number to the modified array
}
```

The ```modified``` array should now be ```[-2, -4, -6, -8, -10]```.

#### while

The ```while``` statment executes a code block until the condition is false.

```javascript
while(condition){
  // execute code until conditon is false. Will keep executing until condition is false
}
```

Example:

```javascript
var num = 0

while(num < 100){
  num = num * 2
}
```

Num will be multiplied by 2 until it is >=100.

[Chapter 4: Input and Output (I/O)](chapter4.md)

[Chapter 2: Data](chapter2.md)

