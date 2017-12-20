var myCar = function(maxSpeed, driver{

    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) {
        console.log(speed + time);
    };
 }

 var myCar = new Car (70, "Ala");
var myCar2 = new Car (70, "ola");
var myCar3 = new Car (70, "Jas");
var myCar4 = new Car (70, "Malgosia");

myCar.drive(30, 5);
myCar3.logDriver();



