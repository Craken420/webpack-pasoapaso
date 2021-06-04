import './style.css'
//ECMA6
let xECMA6: string = 'can be accessed globally';
const piECMA6: number = 3.14;
const myFunctionECMA6 = () => {
  console.log(xECMA6, piECMA6);
}
myFunctionECMA6();

class CarECMA6 {
    title: string;
    constructor(brand: string)
    {    
        this.title=brand;
    }
    drive() {
        return 'i have a '+this.title;
    }
}

class ToyotaECMA6 extends CarECMA6{
    color: string;
    constructor(brand: string, color: string){
        super(brand);
        this.color=color;
    }
    honk()
    {
        return this.drive() + ',its a ' + this.color;
    }
}

const toyotaECMA6 = new ToyotaECMA6("Ford","red");

const element = window.document.getElementById("demo2ECMA6");

if (element !== null) {
    element.innerHTML = toyotaECMA6.honk();
}
