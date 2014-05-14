Chapter 3: Input and Output (I/O)
=============

Most programs consist of taking some input and using it to output something.

The input of a program is usually called ```stdin``` or Standard Input. Similarly, ```stdout```, Standard Output, is the output. There's also a ```stderr``` for errors, but we won't talk about that.

#### Output

For our first simple program, "Hello World", we will write to the ```stdout``` of our program. We can do this with the  [```console```](http://nodejs.org/api/stdio.html) object which is included by default in node.js programs.

To write ```"Hello World!"``` to the stdout / console, we write: 

```javascript
console.log("Hello world!")
```

The code above will result in the following output:

```Hello World!```

#### Input

To read from the keyboard input on the console, we will read directly from the ```stdin``` [Stream](http://nodejs.org/api/stream.html) which is a property of the [```process```](http://nodejs.org/api/process.html) object which represents the current process which the node.js program is running in.

```javascript
process.stdin.setEncoding('utf8');        // sets the stream to encode in standard text values

process.stdin.on('readable', function() { // when the input stream becomes readable, run this function
  var data = process.stdin.read()        // read the data that's in the input stream (the key strokes)
  if (data !== null) {                   // there's a null when the program is first opened, so ignore null values
    console.log('data: ' + data)         // print out the data that was read in
  }
})
```

Example: If we input: ```This is a line of text!``` 
The output would be:

```
data: This is a line of text!   

```

Note above: There was intentionally a new line after the output, because the ```console.log``` function appends a newline character ```\n``` to the end of its input. In this case, the input was ```This is a line of text!\n``` due to the "enter" or "carriage" return key that we pressed to finish our input. So, ```console.log``` printed ```This is a line of text!\n``` and then appended ```\n``` which made an extra line appear. 

We can get rid of this extra line by either: removing the newline from the input, or writing the input directly to the ```process.stdout``` stream instead of using ```console.log```. I'll show both examples below:

##### Removing the newline from the input

```javascript
process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var data = process.stdin.read();

  if (data !== null) {
    data = data.split("\n")[0]; // splitting the string on the newline, taking everything before the newline (index 0)
    console.log('data: ' + data);
  }
});
```

Here I used the [```.split```](http://www.w3schools.com/jsref/jsref_split.asp) function on string. It separates a string based on the string inputted, which was a newline ```\n``` character in this case and returns an array of all the parts separated by the character. For our example, ```["This is a line of text!", ""]``` was returned and I knew that the first index would be everything before the newline, so I grabbed the value at the ```0``` index of the array, which was ```"This is a line of text!"```

The output would be:
```
data: This is a line of text!   
```

##### Outputting only one newline

```javascript
process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var data = process.stdin.read();
  if (data !== null) {
    process.stdout.write('data: ' + data);
  }
});
```

We know the input already has a newline at the end of it, so instead of using ```console.log``` we will write directly to ```process.stdout``` (which will output to the console).

The output would be:
```
data: This is a line of text!   
```

TODO: Explain about reading arguments from the command line

Chapter 4 ....

[Chapter 2: Data](chapter2.md)
