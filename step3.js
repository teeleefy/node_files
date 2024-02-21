// ## **Step 3**

// Copy over your ***step2.js*** code to ***step3.js***.

// Add a feature where, on the command line, you can *optionally* provide an argument to output to a file instead of printing to the console. The argument should look like this: `--out output-filename.txt readfile-or-url`.

// Current features should still work the same:

// ```bash
// $node step3.js one.txt
// This is file one.

// $node step3.js http://google.com
// <!doctype html><html ...

// ```

// However, if `--out` follows your script name, it should take the next argument and use that as the path to write to.

// For example:

// ```bash
// $node step3.js --out new.txt one.txt
// $# no output, but new.txt contains contents of one.txt

// $node step3.js --out new.txt  http://google.com
// $# no output, but new.txt contains google's HTML
// ```

// Make sure you handle errors trying to write to the file:

// ```bash
// $node step3.js --out /no/dir/new.txt one.txt
// Couldn't write /no/dir/new.txt:
//   Error: ENOENT: no such file or directory, open '/no/dir/new.txt'

// ```

// **It may be the case at this point that you have functions like this:**

// ```jsx
// **function** cat(path) { }

// **function** catWrite(path, filename) { }

// **function** webCat(url) { }

// **function** webCatWrite(path, filename) { }
// ```

// **If so, you probably have a lot of duplicated code among these functions. Try to structure your code so that:**

// - your functions are small, could be tested, and do one thing
// - you minimize duplication of code throughout