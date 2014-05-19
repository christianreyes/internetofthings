Chapter 4: File I/O
============

Programs often need to read files in to do some data-processing and outputing data in a file.

Here are some examples of using the [```FileSystem```](http://nodejs.org/api/fs.html) module ```fs```.

Let's assume that we have a file called __languages.txt__ which contains the name of a different language on each line:

```
english
spanish
french
chinese
arabic
german
italian
greek
```

Let's write a small program which will read in __languages.txt__ and output the number of languages in the file.

```javascript
var fs = require('fs')

var data = fs.readFileSync("languages.txt");
```

```fs.readFileSync``` will return the binary data of the file in a [```Buffer```](http://nodejs.org/api/buffer.html) object, but we want to have the ```String``` representation of the file, not the binary representation, so we will call ```.toString()``` on the resulting ```buffer``` of binary data.

```javascript
var dataString = data.toString();
```

If we check what the contents of the string are in the file by writing ```console.log(dataString)``` we can see that the file contents is actually the string:

```javascript
'english\nspanish\nfrench\nchinese\narabic\ngerman\nitalian\ngreek\n'
```

Each language is separated by the newline character ```\n``` (on windows it's actually ```\r\n```)

Let's split the string of the entire file into each line by using the ```.split``` function on a String.

```javascript
var lines = dataString.split("\n"); 
````

Which results in the array ```[ 'english', 'spanish', 'french', 'chinese', 'arabic', 'german', 'italian', 'greek', '' ]```. There's an empty string as the last element in the array because there was a newline at the end of the file. Let's remove the last element of the array. 

```javascript
lines.pop() // removes the last element in an array - http://www.w3schools.com/jsref/jsref_obj_array.asp
```

Now that we have only the languages in the array ```[ 'english', 'spanish', 'french', 'chinese', 'arabic', 'german', 'italian', 'greek' ]```, we can output the length to the console.

```javascript
var numLanguages = lines.length;

console.log("There are " + numLanguages + " lanugages in the file");
```

Let's take it a step futher and output the number of languages in a file called ```numLanguages.txt```.

```javascript
fs.writeFileSync("numLanguages.txt", numLanguages)
```

If we open up the file in a text editor, we see that the ```numLanguages.txt``` file contains:

```
8
```

Chapter 5: Networks

[Chapter 3: Input and Output (I/O)](chapter3.md)
