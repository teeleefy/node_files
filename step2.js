// Step 2
// Copy over your step1.js code to step2.js
// Add a new function, webCat. This should take a URL and, using axios, should read the content of that URL and print it to the console.
// Modify the code that invoked cat so that, based on the command-line args, it decides whether the argument is a file path or a URL and calls either cat or webCat, respectively.
// 

//$node step2.js one.txt
// This is file one.

// $node step2.js http://google.com
// <!doctype html><html ...

// ​
// If there is an error getting the page, it should print that.
// 

//$node step2.js http://rithmschool.com/no-such-path
// Error fetchinghttp://rithmschool.com/no-such-path:
//   Error: Request failed with status code 404


const fs = require('fs');
const process = require('process');
const axios = require('axios');
const async = require('async');

const cat = path => {
    fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        console.log("ERROR:", err);
        process.kill(1)
    }
    console.log(data)
    })
}

async function webCat(path){
    try{
    let response = await axios.get(path);
    console.log(response.data);
    } catch (err){
        console.log('ERROR', err);
        process.exit(1);
    }
} 

const readFile = path => {
  if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
}  
}

readFile(process.argv[2]);

//function readFile(path){
    //try {}
    //if((fs.statSync(path)).isFile()){
      //  cat(path);}
    //else{
    //webCat(path)}
//}

// function readFile(path){
//     try {webCat(path)}
//     catch{cat(path)}
// }