//ECMA6
let xECMA6 = 'can be accessed globally';
const piECMA6 = 3.14;
const myFunctionECMA6 = () => {
  console.log(xECMA6, piECMA6);
}
myFunctionECMA6();

function CarECMA5(options){
    this.title = options.title;
}
CarECMA5.prototype.drive = function(){
    return 'vroom';
};
function ToyotaECMA5(options){
    CarECMA5.call(this,options);
    this.color = options.color;
}
ToyotaECMA5.prototype = Object.create(CarECMA5.prototype);
ToyotaECMA5.prototype.constructor = ToyotaECMA5;
ToyotaECMA5.prototype.honk = function() {
    return 'beep';
}
const toyotaECMA5 = new ToyotaECMA5({color:"red",title:"Daily Driver"});
document.getElementById("demoECMA5").innerHTML = toyotaECMA5.drive();
document.getElementById("demo1ECMA5").innerHTML = toyotaECMA5.title;
document.getElementById("demo2ECMA5").innerHTML = toyotaECMA5.honk();
document.getElementById("demo3ECMA5").innerHTML = toyotaECMA5.color;


class CarECMA6 {
    constructor(brand)
    {    
        this.title=brand;
    }
    drive() {
        return 'i have a '+this.title;
    }
}

class ToyotaECMA6 extends CarECMA6{
    constructor(brand,color){
        super(brand);
        this.color=color;
    }
    honk()
    {
        return this.drive()+',its a '+this.color;
    }
}

const toyotaECMA6 = new ToyotaECMA6("Ford","red");
document.getElementById("demo2ECMA6").innerHTML = toyotaECMA6.honk();
