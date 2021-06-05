import './style.less';
import CopySolid from './assets/images/copy-solid.svg';
import LockSolid from './assets/images/lock-solid.svg';
import Logos from './assets/images/LOGOS.jpg';
import Security from './assets/images/security.svg';

document.getElementById('copy-solid').src = CopySolid;
document.getElementById('lock-solid').src = LockSolid;
document.getElementById('logos').src = Logos;
document.getElementById('security').src = Security;
//ECMA6
let xECMA6 = 'can be accessed globally';
const piECMA6 = 3.14;
const myFunctionECMA6 = () => {
  console.log(xECMA6, piECMA6);
}
myFunctionECMA6();

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
    constructor(brand, color){
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


// const elemCopySolid = window.document.getElementById("copy-solid");

// if (elemCopySolid !== null) {
//     elemCopySolid.src = CopySolid;
// }

// const elemLockSolid = window.document.getElementById("lock-solid");

// if (elemLockSolid !== null) {
//     elemLockSolid.src = LockSolid;
// }

// const elemLogos = window.document.getElementById("logos");

// if (elemLogos !== null) {
//     elemLogos.src = Logos;
// }

// const elemSecurity = window.document.getElementById("security");

// if (elemSecurity !== null) {
//     elemSecurity.src = Security;
// }
