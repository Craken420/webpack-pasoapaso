import './style.less';

import CopySolid from './assets/images/copy-solid.svg';
import LockSolid from './assets/images/lock-solid.svg';
import Logos from './assets/images/LOGOS.jpg';
import Security from './assets/images/security.svg';

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
let imgen = new Image()
let url = 'https://blog.pleets.org/img/articles/webpack-process.png'
imgen.src = url;
document.body.appendChild(imgen);


let elemCopySolid = <HTMLInputElement>document.getElementById('copy-solid');

if (elemCopySolid !== null) {
    elemCopySolid.src = CopySolid;
}

let elemLockSolid = <HTMLInputElement>document.getElementById('lock-solid');

if (elemLockSolid !== null) {
    elemLockSolid.src = LockSolid;
}

let elemLogos = <HTMLInputElement>document.getElementById('logos');

if (elemLogos !== null) {
    elemLogos.src = Logos;
}

let elemSecurity = <HTMLInputElement>document.getElementById('security');

if (elemSecurity !== null) {
    elemSecurity.src = Security;
}
declare var PRODUCTION: string;
console.log(PRODUCTION)
