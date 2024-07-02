// 1 misol - (array ichidagi 2 dan katta bo'lgan sonlarni boshqa array ga ko'chiring )

// let originalArray = [1, 2, 3, 4, 5, 6, 1, 2];

// let newArray = [];

// for (let i = 0; i < originalArray.length; i++) {
//   if (originalArray[i] > 2) {
//     newArray.push(originalArray[i]);
//   }
// }

// console.log(newArray);


// 2 misol - (2. ixtiyoriy array yarating va uning ichidagi juft va toq sonlar yigindisini toping va promt da kiritilgan son bilan array ichidagi sonlar yigindisi o'rtasidagi farq ni toping)

// let  num = prompt("Son kiriting")
// let numbers = [1,2,3,4,5]
// let result = 0
// for(let i = 0; i < numbers.length; i++)
// if(numbers[i] % 2 == 0){
//     result = result + numbers[i]
// }
// if(num > numbers.length){
//     console.log(`promptdagi ${num} soni katta`)
//     console.log(`arrayni ichidagi ${numbers.length} soni kichik`)
// }
// // console.log(result)


// 3 misol - (foydalanuvchi 2 ta son kiritadi va shu 2 ta so oralig’idagi juft sonlar ye’g’indisini chiqaruvchi algaritm tuzing faqat 1 son 2 son dan kichikligini tekshiring )

// let num1 = parseInt(prompt("Birinchi sonni kiriting:"));
// let num2 = parseInt(prompt("Ikkinchi sonni kiriting:"));

// if (num1 >= num2) {
//   console.log("Birinchi son ikkinchi sondan kichik bo'lishi kerak.");
// } else {
//   let sum = 0;
  
//   for (let i = num1; i <= num2; i++) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
  
//   console.log("Juft sonlar yig'indisi: " + sum);
// }

// 4 misol - (function argument tiga berilgan qiymatlar orasida faqat number larni alohida array ga ko'chiring va return qiling)

// function filterNumbers(...args) {
//     let numbersArray = [];
    
//     for (let i = 0; i < args.length; i++) {
//       if (typeof args[i] === 'number') {
//         numbersArray.push(args[i]);
//       }
//     }
    
//     return numbersArray;
//   }
  
//   console.log(filterNumbers(1, 'a', 3, true, 5, null, 8)); // [1, 3, 5, 8]
//   console.log(filterNumbers('text', 2, undefined, 7, {}, 4.5, [])); // [2, 7, 4.5]
//   console.log(filterNumbers()); // []
  
  
// 5 misol - (argument sifatida berilgan object ni value larinidan tashkil topgan array ni qaytaradigan function yarating)  
// function getObjectValues(obj) {
//     return Object.values(obj);
//   }
  
//   console.log(getObjectValues({a: 1, b: 'hello', c: true})); // [1, 'hello', true]
//   console.log(getObjectValues({x: 42, y: null, z: [1, 2, 3]})); // [42, null, [1, 2, 3]]
//   console.log(getObjectValues({})); // []
  

// 6 misol - (argument sifatida berilgan object ni key larinidan tashkil topgan array ni qaytaradigan function yarating 7. [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4] shu arraydan 4 soni olib tashlansin.)
// Obyektdan kalitlarni qaytaruvchi funksiya
// function getObjectKeys(obj) {
//     return Object.keys(obj);
//   }
  
//   function removeNumberFromArray(arr, num) {
//     return arr.filter(function(item) {
//       return item !== num;
//     });
//   }
  
//   let sampleObject = {a: 1, b: 'hello', c: true};
//   console.log(getObjectKeys(sampleObject)); // ['a', 'b', 'c']
  
//   let sampleArray = [5, 16, 7, 4, 10, 3, 4, 4, 14, 5, 14, 4, 44, 4];
//   let filteredArray = removeNumberFromArray(sampleArray, 4);
//   console.log(filteredArray); // [5, 16, 7, 10, 3, 14, 5, 14, 44]



//  7 misol
// let sampleObject = {
//     a: 5,
//     b: 10,
//     c: 15,
//     d: 20,
//     e: 25,
//     f: 30
//   };
  
//   function getObjectValues(obj) {
//     let values = [];
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         values.push(obj[key]);
//       }
//     }
//     return values;
//   }
  
//   function sumObjectValues(obj) {
//     let sum = 0;
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         sum += obj[key];
//       }
//     }
//     return sum;
//   }
  
//   let valuesList = getObjectValues(sampleObject);
//   console.log("Qiymatlar ro'yxati:", valuesList); // [5, 10, 15, 20, 25, 30]
  
//   let valuesSum = sumObjectValues(sampleObject);
//   console.log("Qiymatlar yig'indisi:", valuesSum); // 105
  