// D task 
const moment = require("moment");
const time = moment().format("HH:mm")
class shop {
    kebab;
    lavash;
    cola;

    constructor(kebab, lavash, cola) {
        this.kebab = kebab;
        this.lavash = lavash;
        this.cola = cola;
    }
    
    qoldiq(){
        console.log(`Hozir ${time}da ${this.kebab}ta kebab, ${this.lavash}ta lavash va ${this.cola}ta cola mavjud`);
    }
    sotmoq(kebab){
        this.kebab -= kebab;
        console.log(`biz ${kebab}ta kebab sotdik va Hozir ${time}da ${this.kebab}ta kebab, ${this.lavash}ta lavash va ${this.cola}ta cola qoldi `);
    }
    qabul(cola){
        this.cola += cola;
        console.log(`biz ${cola}ta cola qabul qildik va Hozir ${time}da ${this.kebab}ta kebab, ${this.lavash}ta lavash va ${this.cola}ta cola boldi `);
    }
}

 

 const myShop = new shop(4,5,2);
 myShop.qoldiq();
 myShop.sotmoq(3);
 myShop.qabul(4);








// B task

// function countDigits(text) {
//     const digitMatches = text.match(/\d/g);
//     if (digitMatches) {
//       return digitMatches.length;
//     } else {
//       return 0;
//     }
//   }
  
//   console.log(`textdagi raqamlar soni:${countDigits("ad2a54y79wet0sfgb9")}`);

// Explanation 



// A task 
// console.log("Function letterida 'x' harfi nectaligini hisoblaymiz");


// let count = 0;

// function countLetter(a, b ) {
//     for( let i = 0; i <= a.length; i++) {
//         if(a.charAt(i) == b) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countLetter("engineer", "e"));
 

// Event loop va callback

// console.log("Jack Ma maslahatlari");

// const list = [
//   "Yahshi talaba bo'ling", // 0-20
//   "Togri boshliq tanlang va koproq hato qiling",// 20-30
//   "Ozingizga ishlashni boshlang",// 30-40
//   "Siz kuchli bolgan narsalarni qiling", // 40-50
//   "Yoshlarga investitsiya qiling", // 50-60
//   "Endi dam oling, foydasi yoq",  // 60
// ];

// function maslahatBering(a, callback) {
//     if(typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function() {
//             callback(null, list[5]);
//         }, 5000)
//     }
// }
// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//     if(err) console.log("ERROR", err);
//     else {
//         console.log('javob', data);
//     }
// });

// console.log("passed here 1")


// async function maslahatBering(a) {
//     if(typeof a !== "number") throw new Error('insert a number');
//     else if (a <= 20) return list[0];
//      else if(a > 20 && a <= 30) return list[1];
//      else if(a > 30 && a <= 40) return list[2];
//      else if(a > 40 && a <= 50) return list[3];
//      else if(a > 50 && a <= 60) return list[4];
//      else {

//         // return list[5];

//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//              }, 5000);
//         });
//     }
// }


// then/catch

// console.log("passed here 0");
// masalahatBering(25).then((data) => {
//     console.log("javob", data);
// }).catch((err) => {
//     console.log("ERROR", err);
// });
// console.log("passed here 1");

// async/await

// async function run() {
//    let javob = await maslahatBering(25);
//    console.log(javob);
//    javob = await maslahatBering(70);
//    console.log(javob);
//    javob = await maslahatBering(41);
//    console.log(javob);
// }
// run();