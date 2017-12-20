//var myCar2 = {

//maxSpeed: 50,
//driver: "Net Ninja",
//drive: function(speed, time) {
  //      console.log(speed * time);
   // },
    //test: function(){
//    console.log(this);
  //  }
//};

//* var myCar3 = {

   // maxSpeed: 50,
// driver: "Shaun",
   // drive: function(speed, time) {
    // console.log(speed * time);
//},
//test: function(){
  //  console.log(this);
//} //
//};

//myCar2.test();
//myCar3.test();
//console.log(myCar2.maxSpeed);
//myCar2.drive(30, 3); //


var myCar2 = {

    maxSpeed: 60,
    driver: "Net Ninja",
    drive: function(speed, time) {
        console.log(speed * time);
    },
    logDriver: function(){
        console.log("driver name is" + this.driver);
    }
};

myCar2.logDriver();
console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);