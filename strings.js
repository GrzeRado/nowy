var myString = 'I\'m a "fun string';

console.log(myString);
console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLocaleLowerCase());
console.log(myString.indexOf("string"));
console.log(myString.indexOf("ninja"));

if (myString.indexOf("ninja")=== -1){
    console.log("the world ninja is not the string");
} else{
    console.log("the world ninja starts at position " + myString.indexOf("ninja"))
}

var string1 = "abc";
var string2 = "bcd";

console.log(string1 === string2);

var string1 = "abc";
var string2 = "ABC";

console.log(string1 === string2);
console.log(string1.toLowerCase() === string2.toLocaleLowerCase());

var string1 = "abc";
var string2 = "bcd";

console.log(string1 < string2);

var string1 = "abc";
var string2 = "Bcd";

console.log(string1 < string2);
