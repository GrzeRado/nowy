//var myDate = new Date();
//console.log(myDate);

//var myPastDate = new Date(1545, 11, 2, 09, 11, 33);
//var myFutureDate = new Date(2515, 0, 31, 09, 11, 33);

//console.log(myPastDate);
//console.log(myFutureDate);


var birthday = new Date(1990, 10, 16);
var birthday2 = new Date(1990, 10, 16);


console.log(birthday.getMonth());
console.log(birthday.getDate());
console.log(birthday.getFullYear());
console.log(birthday.getDay());
console.log(birthday.getTime());

if(birthday == birthday2){
    console.log("birthdays are equal");
}else
    console.log("birthdays are not equal");