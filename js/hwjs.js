// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const n = -65165;

// const newArr = [];

// if (n<0){
//     // вирахуємо кількість від'ємних циклів://
//         let nCircle = Math.ceil (n / (-arr.length));
//     // вирахуємо індекс першого елементу://
//         let nIndex =arr.length * nCircle  + n;
//     console.log(`n =  ${n}`);
//     console.log(`кількість від'ємних циклів =  ${nCircle}`);
//     console.log(`довжина масиву${arr.length} * кількість від'ємних циклів ${nCircle} + значення елементу 'n= ${n}' `);
//     console.log(`індекс першого елементу =  ${nIndex}`);

//         for (let i = nIndex; i < arr.length; i+=1) {
//             newArr.push(arr[i]);
//         }
// }
//  else if (n>0){
//     for (let i = 0; i < n; i+=1) {
//         if ( i >= arr.length ){
//             break;
//         }
//             newArr.push(arr[i]);

//     }
// } else console.log('обрано 0 елементів фрагменту для формування нового масиву ');
// console.log(`newArr =  ${newArr}`)

// // 6
// "use strict";
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// // 7
// function sayHi (){
//   console.log("Hello, this is my first function!") ;
// }
// sayHi ();

// // 8
// // Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// // 9
// function add(a, b, c) {
//   // Change code below this line
//   return a + b + c;
//   // Change code above this line
// }
// add(2, 5, 8); // 15
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// 10
// function makeMessage (name, price) {
//   // Change code below this line
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// };

// 11
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// };

// 12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`
//   // Change code above this line
//   return message;
// }

// 13
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }

//14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }

//15
// function checkAge(age) {
//   let message;
//   if (age >= 18) { // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }
//   return message;
// }

//16
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//     if (available <= ordered){
//        message = "Not enough goods in stock!";
//     } else {
//        message = "Order is processed, our manager will contact you.";
//     }
//   // Change code above this line
//   return message;
// }

//17
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

//18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//    const totalPrice = pricePerDroid * orderedQuantity;
//    if (totalPrice > customerCredits) {
//      message = "Insufficient funds!";
//    } else {
//      message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
//    }
//   // Change code above this line
//   return message;
// }

//19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

//20
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//     if (ordered === 0){
//       message = "There are no products in the order!";
//     } else if (ordered > available) {
//       message = "Your order is too large, there are not enough items in stock!";

//     } else {
//       message = "The order is accepted, our manager will contact you";
//     }
//   // Change code above this line
//   return message;
// }

//21
// function isNumberInRange(start, end, number) {
//   const isInRange = (end >= number && number >= start);; // Change this line

//   return isInRange;
// }

//22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = ( subType === 'vip' || subType === 'pro'); // Change this line

//   return canAccessContent;
// }

//23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }

//24
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//  if (totalSpent > 0 && totalSpent < 5000){
//    discount = BASE_DISCOUNT;
//  } else if (totalSpent >= 5000 && totalSpent < 20000){
//    discount = BRONZE_DISCOUNT;
//  } else if (totalSpent >= 20000 && totalSpent < 50000){
//    discount = SILVER_DISCOUNT;
//  } else {
//    discount = GOLD_DISCOUNT;
//  }
//   // Change code above this line
//   return discount;
// }

// //25
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//    message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//   // if (ordered > available) {
//   //   message = "Not enough goods in stock!";
//   // } else {
//   //   message = "The order is accepted, our manager will contact you";
//   // }

//   // Change code above this line
//   return message;
// }

//26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
//   message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }

//27
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "starter": // Change this line
//       price = 0; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "organization": // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

//28
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
// switch (password) {
//   case null:
//   message = "Canceled by user!";
//   break;
//   case ADMIN_PASSWORD:
//   message = "Welcome!";
//   break;
//   default:
//   message = "Access denied, wrong password!";
// }
//   // Change code above this line
//   return message;
// }

//29
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//    switch (country) {
//           case "China" :
//      message = 'Shipping to China will cost 100 credits';
//      break;
//           case "Chile" :
//      message = 'Shipping to Chile will cost 250 credits';
//      break;
//           case "Australia" :
//      message = 'Shipping to Australia will cost 170 credits';
//      break;
//           case "Jamaica" :
//      message = 'Shipping to Jamaica will cost 120 credits';
//      break;
//      default:
//      message = "Sorry, there is no delivery to your country";
//    }
//   // Change code above this line
//   return message;
// }

//30
// function getNameLength(name) {
//   const message = `Name ${(name)} is ${(name.length)} characters long`; // Change this line

//   return message;
// }

//31
// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = (courseTopic.length);
// const firstElement = (courseTopic[0]);
// const lastElement = (courseTopic[courseTopic.length -1]);

// // Change code above this line

//32
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

//33
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//       result = message.length > maxLength ? message.slice(0, maxLength)+"...": message;
//   /// Change code above this line
//   return result;
// }

//34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

//35
// function checkForName(fullName, name) {
//   const result = fullName.includes(name);// Change this line
//    return result;
//  }

//36а
//  function checkForSpam(message) {
//   let result = false;
//   // Change code below this line

//     const normalizedMessage = message.toLowerCase();
//     if (normalizedMessage.includes('spam') ){
//       result = true;
//     } else if (normalizedMessage.includes('sale')){
//       result = true;
//     }
//   // Change code above this line
//   return result;
// }

//  //36б
// function checkForSpam(message) {
//   let result = false;
//   // Change code below this line

//     const normalizedMessage = message.toLowerCase();

//     if (normalizedMessage.includes('spam') || normalizedMessage.includes('sale')){
//       result = true;
//     }
//   return false;
// }

///////////////////////////////////////////////////////////////////////////////////////////

// //1
// function checkAge(age) {
//   if (age>=18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// //2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
//   // Change code above this line
// }

// //3
// function checkStorage(available, ordered) {
//     // Change code below this line

//     if (ordered === 0) {
//       return "Your order is empty!";
//       ;
//     } if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
//     }
//       return "The order is accepted, our manager will contact you";

//     // Change code above this line
//   }

//4
// // Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"];

//5
// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length -1];
// // Change code below this line

//6
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";
// // Write your code under this line

//7
// const fruits = ["apple", "peach", "pear", "banana"];
// const fruitsArrayLength = fruits.length;
// // Change code below this line

//8
// const fruits = ["apple", "peach", "pear", "banana"];
// const lastElementIndex = fruits.length -1;
// const lastElement = fruits[lastElementIndex];
// Change code below this line

//9
// function getExtremeElements(array) {
//   // Change code below this line
// const a=array[0];
// const b=array[array.length-1];
// return [a, b]

//   // Change code above this line
// }

//10
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   let a=message;
//   let b=delimeter;
//    words=a.split(b);
//   // Change code above this line
//   return words;
// }

//11
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//     return message.split(' ').length * pricePerWord;

//   // Change code above this line
// }

//12
// function makeStringFromArray(array, delimeter) {
//   let string;
//     // Change code below this line
//   string = array.join(delimeter);

//     // Change code above this line
//     return string;
//   }

//13
// function slugify(title) {
//   return title
//           .toLowerCase()
//           .split(" ")
//           .join("-");
//   // Change code above this line
// }

//14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

//15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

//16
// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line

// let newBigArray = firstArray.concat(secondArray);

// console.log(newBigArray);

// let newArray = newBigArray.slice(0, maxLength)
// return newArray;
//   // Change code above this line
// }
// //17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end ; i += 1 ) { // Change this line
//   console.log(i);
// }
//18
// function calculateTotal(number) {
//   // Change code below this line
//   let total=0;
//  for (let i = 1; i <= number ; i += 1 ) { // Change this line
//    total += i;
//  }
//  return total;

//    // Change code above this line
//  }

//19
//  const fruits = ['apple', 'plum', 'pear', 'orange'];

//  for (let i = 0; i < fruits.length ; i += 1 ) { // Change this line
//    const fruit = fruits[i]; // Change this line
//    console.log(fruit);
//  }

//20
//  function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
// for ( let i=0  ; i < order.length ; i+=1){
//   total += order[i]
//   console.log(total)
// }
//   // Change code above this line
//   return total;
// }

//21
// function findLongestWord(string) {
//   // Change code below this line
// let longestWord = 0
// let arrai = string.split(' ')
// let word = undefined;

//   for (let i = 0; i < arrai.length - 1; i+=1 ) {
//       if (longestWord < arrai[i].length) {
//         longestWord = arrai[i].length;
//         word = arrai[i]
//       }
//   }
//   console.log(word)
//   return word ;
//   // Change code above this line
// }

//22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for ( let i = min ; i <= max ; i += 1){
//     numbers.push(i)
//     console.log(numbers)
// }
//   // Change code above this line
//   return numbers;
// }

//23
// function filterArray(numbers, value) {
//   // Change code below this line
//   let newArray = [];
//  for ( let i = 0 ; i < numbers.length ; i += 1){
//    if (numbers[i]>value){
//     newArray.push(numbers[i])
//     console.log(newArray)
//    }
// }
// return newArray
//  // Change code above this line
// }

//24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//  return fruits.includes(fruit); // Change this line
// }

//25
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let newArray=[];
// for ( let i = 0 ; i < array1.length ; i+=1){
//       if (array2.includes(array1[i])) {
//         newArray.push(array1[i])
//       }
// }
//   return newArray
//  // Change code above this line
// }

//26
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const element of order) {
//       total += element;
//     }
//       return total
// }
//   // Change code above this line

//27
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

//28
// Change code below this line
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

//29
// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let newArray=[];
//   for (let i = start; i <= end; i += 1){

//     if (i % 2 === 0){
//       newArray.push(i);
//     }

//   }
//  return newArray

//    // Change code above this line
// }

//30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {

//     number = i;
//     break;

//   }

// }

//31
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//         return number;
//       return
//     }
//   }

//   // Change code above this line
// }

//32
// function includes(array, value) {
//   // Change code below this line
//   let include = false;
//          console.log(`value  ${value}`)
// for ( let i=0 ; i<array.length ; i += 1){
//       if(array[i] === value){
//          include = true;
//          console.log(array[i])
//       }
// }
// console.log(include);
// return include;
//   // Change code above this line
// }

/////////////////////////////////////////////// 3 autoproof
//1
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };
// //2
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };

//3
//   const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };

//   // Change code below this line
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   console.log (aptRating);
//   console.log (aptDescr);
//   console.log (aptPrice);
//   console.log (aptTags);
//   // Change code above this line

//4
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Change code above this line

//5
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line

//6
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name ="Henry Sibola";
// apartment.tags.push("trusted");

// Change code below this line

//7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
//   apartment.area = 60;
//   apartment.rooms= 3;
//   apartment.location={
//     country : "Jamaica",
//     city : "Kingston",
//   };

//8
//   const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,
//   // Change code above this line
// };

//9
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };

//10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment ){
//   values.push(apartment[key]);
//   keys.push(key);
// }
// console.table(keys);
// console.table(values);

//11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)){
//     // keys.push(key);

//   values.push(apartment[key]);
//   };
//   // Change code above this line
// }

//12 -1
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// for (const key in object) {
//    if (object.hasOwnProperty(key)){
//      propCount += 1;
//    }

// }
//   // Change code above this line
//   return propCount;
// }

//12-2
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
// propCount = Object.keys(object).length;
//   // Change code above this line
//   return propCount;
// }

//13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//       values.push(apartment[key]);
//         console.log(values);
//     }

//14
// function countProps(object) {
//   let propCount = 0;

// propCount = Object.keys(object).length;

//   return propCount;
// }

//15
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment) ;
// const values = Object.values(apartment);

//16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//     const values = Object.values(salaries);
//     console.log(values);
//     const keys = Object.keys(salaries);
//     console.log(keys);
//         for (const key of keys){
//               totalSalary += salaries[key];
//               console.log(totalSalary);
//           // }

//       }
//   // Change code above this line

// return totalSalary;
// }

//17
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors){
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
//18
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   console.log(productName);
// for (let product of products){
//   if (product.name === productName) {
//     return product.price;
//   }
// }
//  return null;

//   // Change code above this line
// }

//19
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// const resultArray = [];
// for (const product of products){
//   console.log(product);

//   if (Object.keys(product).includes(propName)) {
//     resultArray.push(product[propName]);
//   }
// }
// console.log(resultArray );
//       return resultArray;
//   // Change code above this line
// }

//20
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
// for (const product of products){

//   if (product.name === productName) {
//     console.log(product);
//     console.log(product.price*product.quantity);
//     return product.price*product.quantity;
//   }
// }
//  return 0;
// }

//21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow } =  highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

//22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

//23
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", } = highTemperatures;
// // const yesterday = highTemperatures.yesterday;
// // const today = highTemperatures.today;
// // const tomorrow = highTemperatures.tomorrow;
// // const icon = highTemperatures.icon;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

//24
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

//25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line
// const {
//   today: {
//     high:highToday,
//     low:lowToday,
//     icon:todayIcon="https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"} ,
//   tomorrow: {
//     high:highTomorrow,
//     low:lowTomorrow,
//     icon:tomorrowIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast;
// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;

//26
// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const { today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh} } = forecast;
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

//27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = (Math.max(...scores));
// const worstScore = Math.min(...scores);

//28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = (Math.max(...allScores));
// const worstScore = (Math.min(...allScores));

//29
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings, ...overrideSettings};

//30
// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
// const newTask = { completed: false, category: "General", priority: "Normal", ...data};
// console.log(newTask);
//   return newTask
//   // Change code above this line
// }

//31
// Change code below this line
// function add(...rest) {
//   let total=1;
//   for ( const  argument of arguments){
//     total += argument;
//   }
//   console.log(total);
//   return total;
//   // Change code above this line
// }

//32-1( доооооооооовгий варіант)
// Change code below this line
// function addOverNum(...args) {
//   let total = 0;

//   for (let id=1; id<args.length; id+=1) {

//     if (args[0] < args[id] ){

//     total +=  args[id];
//     }
//   }
//    console.log(total);
//   return total;
//   // Change code above this line
// }

//32-2
// Change code below this line
// function addOverNum(a, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > a)
//     total += arg;
//   }

//   return total;
//   // Change code above this line
// }

//33
// Change code below this line
// function findMatches(a,...args) {
//   const matches = []; // Don't change this line
//   console.log(a);
//   for (const arg of args){
//     console.log(arg);
//     if (a.includes(arg)){
//       matches.push(arg);
//     }
//   }
//   console.log(matches);
//   // Change code above this line
//   return matches;
// }

//34
// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName){
//     return `Deleting book ${bookName}`
//   },

//   updateBook(oldName, newName){
//     return `Updating book ${oldName} to ${newName}`
//   }

//   // Change code above this line
// };

//35
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookToChange = this.books.indexOf(oldName);
//        this.books.splice(bookToChange, 1, newName);

//     // Change code above this line
//   },
// };

//36
// const atTheOldToad = {
//   // Change code below this line
//     potions : [],

//   // Change code above this line
// };

//37
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions(){
//     return this.potions
//   }
//   // Change code above this line
// };

//38
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line
//        this.potions.push(potionName);
//        console.log(this.potions);

//     // Change code above this line
//   },
// };

//39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line

//     const potionToDell = this.potions.indexOf(potionName);
//        this.potions.splice(potionToDell, 1,);

//     // Change code above this line
//   },
// };

//40
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const potionsToChange = this.potions.indexOf(oldName);
//        this.potions.splice(potionsToChange, 1, newName);

//     // Change code above this line
//   },
// };

//41
// const atTheOldToad = {
//   potions: [
//     {
//      name: "Speed potion",
//      price: 460
//     },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       const {name} = newPotion;
//               if (potion.name.includes(name)) {
//                      return `Error! Potion ${name} is already in your inventory!`;
//                      }
//          }
//       this.potions.push(newPotion);
//     return this.potions;
//   },
//   removePotion(potionName) {

//     for (const potion of this.potions) {
//           if ( potionName === potion.name){
//               const potionIndex = this.potions.indexOf(potion);
//               this.potions.splice(potionIndex, 1);
//              }
//           }
//       return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     for (let potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//       return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };

/////////////////////////////////////////////////////////////////  4 module  ////////////////////

// 4-1
// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza.

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = (makePizza());
// const pointer = makePizza;

// Оголошена функція makePizza
// Оголошена змінна result
// Значення змінної result - це рядок "Your pizza is being prepared, please wait."
// Значення змінної result отримане за допомогою виклику функції
// Оголошена змінна pointer
// Значення змінної pointer - це посилання на функцію makePizza

//4-2
// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала її виклик. Функція deliverPizza або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.

// function deliverPizza(pizzaName) {
//   // console.log (pizzaName)
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   // console.log (pizzaName)
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// Chande code below this line
// function makeMessage(pizzaName, callback) {
//   // console.log (pizzaName)
//   // console.log (callback)
//   return callback(pizzaName);
// }
// console.log (pizzaName)

// Оголошена функція deliverPizza
// Оголошена функція makePizza
// Оголошена функція makeMessage
// Функція makeMessage приймає два параметри, названі відповідно до завдання, pizzaName і callback

// console.log(makeMessage("Royal Grand", makePizza))
// console.log(makeMessage("Royal Grand", deliverPizza))
// makePizza("PashaBest")
//  повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// Виклик makeMessage("Ultracheese", deliverPizza) повертає рядок "Delivering Ultracheese pizza."

// 4-3
// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   return`Eating pizza ${pizzaName}.`
// });

//4-4
// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats"],
//     order(pizzaName, onSuccess, onError) {
//       if (!this.pizzas.includes(pizzaName)){
//         return onError(`There is no pizza with a name ${pizzaName} in the assortment.`);
//       }
//      return onSuccess(pizzaName) ;
//     },
//   };
//   // Change code above this line

//   // Callback for onSuccess
//   function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
//   }

//   // Callback for onError
//   function onOrderError(error) {
//     return `Error! ${error}`;
//   }

//   // Method calls with callbacks
//   pizzaPalace.order("Smoked", makePizza, onOrderError);
//   pizzaPalace.order("Four meats", makePizza, onOrderError);
//   pizzaPalace.order("Big Mike", makePizza, onOrderError);
//   pizzaPalace.order("Vienna", makePizza, onOrderError);

//4-5
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Change code below this line

//   orderedItems.forEach(function(orderedItem) {
//     totalPrice += orderedItem;
//   });
//     // Change code above this line
//     return totalPrice;
//   }

//4-6
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

//         numbers.forEach(function(number) {

//       if (number > value) {
//         filteredNumbers.push(number);
//       }

//     }
//                      );

//     // Change code above this line
//     return filteredNumbers;
//   }

//4-7
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//       firstArray.forEach(function(element) {

//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }

//     }
//          );
//     return commonElements;
//     // Change code above this line
//   }

//4-8
// Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//     // Change code above this line
//     return quantity * pricePerItem;
//   }

//4-9
// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// // Change code above this line

//4-10
// Change code below this line
// const calculateTotalPrice = orderedItems =>{
//     let totalPrice = 0;

//     orderedItems.forEach( item =>
//       totalPrice += item );

//     return totalPrice;
//   }
//   // Change code above this line

//4-11
// Change code below this line
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     // Change code above this line
//     return filteredNumbers;
//   }

//-12
// Change code below this line
// const getCommonElements=(firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach (element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });

//     // Change code above this line
//     return commonElements;
//   }

//4-13
// function changeEven(numbers, value) {
//     // Change code below this line
//     const newArray = [...numbers];
//     for (let i = 0; i < newArray.length; i += 1) {
//       if (newArray[i] % 2 === 0) {
//         newArray[i] = newArray[i] + value;
//       }

//     }
//     console.log(newArray);
//     // Change code above this line
//   }
//   changeEven([2, 8, 3, 7, 4, 6], 10)

//4-14
// function changeEven(numbers, value) {
//     // Change code below this line
//         const newArray = [];
//     numbers.forEach(
//       number => {
//                   if (number % 2 === 0) {
//                         newArray.push(number + value);
//                         }
//                   else newArray.push(number)
//                 }
//     )
//     return newArray
//     // Change code above this line
//   }

//4-15
// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

//4-16
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line

//   const titles = books.map(books=>books.title);

// 4-16
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism"],
//     },
//   ];
//   // Change code below this line

//   const genres = books.flatMap(books=>books.genres);

// 4-17
// Change code below this line
// const getUserNames =  users.map(users=>users.name);
//   // Change code above this line

//4-18
//   // Change code below this line
// const getUserEmails = users => users.map(user => user.email);
// // Change code above this line

//4-19
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

//4-20
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       genres: ["adventure", "history"],
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       genres: ["fiction", "mysticism"],
//     },
//     {
//       title: "Redder Than Blood",
//       author: "Tanith Lee",
//       genres: ["horror", "mysticism", "adventure"],
//     },
//   ];
//   // Change code below this line
//   const allGenres = books.flatMap(book=>book.genres);
//   const uniqueGenres = allGenres.filter((book, index, array) => array.indexOf(book) === index);

//4-21
//   const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];

//   const MIN_RATING = 8;
//   const AUTHOR = "Bernard Cornwell";
//   // Change code below this line

//   const topRatedBooks = books.filter(book=>book.rating > MIN_RATING);
//   const booksByAuthor = books.filter(book=>book.author === AUTHOR);

//4-22
// Change code below this line
// const getUsersWithEyeColor = (users, color) => users.filter(user=>user.eyeColor === color);

//4-23
// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => users.filter(user=>user.age >= minAge && user.age <= maxAge);
// // Change code above this line

//4-24
// // Change code below this line
// const getUsersWithFriend = (users, friendName) => users.filter(user=>user.friends.includes(friendName));
// // Change code above this line

//4-25
// Change code below this line
// const getFriends = (users) => {

//     return users
//           .flatMap(user => user.friends)
//               .filter((friend, index, array) => array
//                   .indexOf(friend) === index);
//   };
//   // Change code above this line

//4-26
// // Change code below this line
// const getActiveUsers = (users) => users.filter(user=>user.isActive);
// // Change code above this line

//4-27
// // Change code below this line
// const getInactiveUsers = (users) => users.filter(user=>user.isActive===false)
// // Change code above this line

//4-28
// const books = [
//     {
//       title: 'The Last Kingdom',
//       author: 'Bernard Cornwell',
//       rating: 8.38,
//     },
//     {
//       title: 'Beside Still Waters',
//       author: 'Robert Sheckley',
//       rating: 8.51,
//     },
//     {
//       title: 'The Dream of a Ridiculous Man',
//       author: 'Fyodor Dostoevsky',
//       rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   ];
//   const BOOK_TITLE = 'The Dream of a Ridiculous Man';
//   const AUTHOR = 'Robert Sheckley';
//   // Change code below this line

//   const bookWithTitle = books.find((books) => books.title === BOOK_TITLE);
//   const bookByAuthor = books.find((books) => books.author === AUTHOR);

//4-29
// // Change code below this line
// const getUserWithEmail = (users, email) => users.find((users)=>users.email===email);
// // Change code above this line

//4-30
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((element) => element %2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((element) => element %2 !==0 );

// const eachElementInSecondIsEven = secondArray.every((element) => element %2 === 0);;
// const eachElementInSecondIsOdd = secondArray.every((element) => element %2 !==0 );;

// const eachElementInThirdIsEven = thirdArray.every((element) => element %2 === 0);;;
// const eachElementInThirdIsOdd = thirdArray.every((element) => element %2 !==0 );;

//4-31
// // Change code below this line
// const isEveryUserActive = (users) => users.every((element)=>element.isActive)
// // Change code above this line

//32
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((value)=>value %2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value)=>value %2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((value)=>value %2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((value)=>value %2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((value)=>value %2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((value)=>value %2 !== 0);

//33
// // Change code below this line
// const isAnyUserActive = users => users.some((value)=>value.isActive)
// // Change code above this line

//34
// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
//   // Change code below this line

//   const totalPlayTime = playtimes.reduce((previousValue, name) => previousValue+name);

//   // Change code above this line
//   const averagePlayTime = totalPlayTime / playtimes.length;

//35
//   const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
//   ];
//   // Change code below this line

//   const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//     return total + player.playtime / player.gamesPlayed ;
//   }, 0);;

//36
//   // Change code below this line
// const calculateTotalBalance = users => users.reduce((total, user) => {
//     return total + user.balance;
//   }, 0);
//   // Change code above this line


//37
// const getTotalFriendCount = users => {

//     const totalFriends = users.reduce((total, user) => {
//      return [...total, ...user.friends];
//  }, []);

//  return totalFriends.length;
// };

//38
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

//39
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

//40
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
//   ];
//   // Change code below this line

//   const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

//   const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));;

//41
// const books = [
//     { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.38,},
//     { title: "Beside Still Waters", author: "Robert Sheckley", rating: 8.51,},
//     { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", rating: 7.75,},
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line
  
  
//   const sortedByAuthorName = [...books].sort(
//     (firstBook, secondBook) =>
//     firstBook.author.localeCompare(secondBook.author)
//   );
//   const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));
  
//   const sortedByAscendingRating = [...books].sort((firstBook, secondBook) =>
//     firstBook.rating - secondBook.rating
//   );
  
//   const sortedByDescentingRating = [...books].sort((firstBook, secondBook) =>
//     secondBook.rating - firstBook.rating
//   );

//42
// Change code below this line
// const users = [
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male"
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female"
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male"
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female"
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male"
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male"
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female"
//     }
//   ];

// // Change code below this line
// const sortByAscendingBalance = users => [...users].sort((firstUser, secondUser) => 
// firstUser.balance - secondUser.balance
// );
// console.log(sortByAscendingBalance);
// // Change code above this line

//43
// Change code below this line
// const sortByDescendingFriendCount = (users) => [...users]
//        .sort((firstUser, secondUser) =>
//          secondUser.friends.length - firstUser.friends.length)
// // Change code above this line

//44
// // Change code below this line
// const sortByName = users =>
//   [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name))
// // Change code above this line

//45
// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//       title: "The Dreams in the Witch House",
//       author: "Howard Lovecraft",
//       rating: 8.67,
//     },
//   ];
//   const MIN_BOOK_RATING = 8;
//   // Change code below this line

//   const names = books
//     .filter(book=>book.rating > MIN_BOOK_RATING)
//     .map(book=>book.author)
//     .sort((firstAuthor, secondAuthor) => firstAuthor.localeCompare(secondAuthor));
  
//46
//   const getNamesSortedByFriendCount = users => [...users]
//   .sort((firstUser, secondUser) => firstUser.friends.length - 
//     secondUser.friends.length)
//   .map(user=>user.name);

//47
// Change code below this line
// const getSortedFriends = users => users
     
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array
//     .indexOf(friend) === index)
//     .sort();
// // Change code above this line

//48
// // Change code below this line
// const getTotalBalanceByGender = (users, gender) => 
//   users.filter(user=>user.gender === gender).reduce((acc, user) =>acc + user.balance, 0);
// // Change code above this line

///////////////////////////////////// 5 modul//////////////////////////

5-1
// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//       return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//       const isPizzaAvailable = this.checkPizza(pizzaName);
  
//       if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//       }
  
//       return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
//   };
  

/////5-2
// const customer = {
//     username: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["Burger", "Pizza", "Salad"],
//     // Change code below this line
//     getBalance() {
//       return this.balance;
//     },
//     getDiscount() {
//       return this.discount;
//     },
//     setDiscount(value) {
//         this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost - cost * this.discount;
//       this.orders.push(order);
//     },
//     // Change code above this line
//   };
  
//   customer.setDiscount(0.15);
//   console.log(customer.getDiscount()); // 0.15
//   customer.addOrder(5000, "Steak");
//   console.log(customer.getBalance()); // 19750
//   console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

  //5-3
//   const historyService = {
//     orders: [
//       { email: "jacob@hotmail.com", dish: "Burrito" },
//       { email: "solomon@topmail.net", dish: "Burger" },
//       { email: "artemis@coldmail.net", dish: "Pizza" },
//       { email: "solomon@topmail.net", dish: "Apple pie" },
//       { email: "jacob@hotmail.com", dish: "Taco" },
//     ],
//     // Change code below this line
//     getOrdersLog() {
//       return this.orders
//         .map(order => `email: ${order.email} dish: ${order.dish}`)
//         .join(" - ");
//     },
//     getEmails() {
//       const emails = this.orders.map(order => order.email);
//       const uniqueEmails = new Set(emails);
//       return [...uniqueEmails];
//     },
//     getOrdersByEmail(email) {
//       return this.orders.filter(order => order.email === email);
//     },
//     // Change code above this line
//   };

//5-4
// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
//   };
//   // Change code below this line
  
//   const child = Object.create(parent);;
  
//   // Change code above this line
//   child.name = "Jason";
//   child.age = 27;

//5-5
// const ancestor = {
//     name: "Paul",
//     age: 83,
//     surname: "Dawson",
//     heritage: "Irish",
//   };
//   // Change code below this line
  
//   const parent = Object.create(ancestor);
//   parent.name = "Stacey";
//   parent.surname = "Moore";
//   parent.age = 54;
  
//   const child = Object.create(parent);
//   child.name = "Jason";
//   child.age = 27;
  
//   // Change code above this line

//5-6
// class Car {
  
// }

//5-7
// class Car {
//     // Change code below this line
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//      }
//     // Change code above this line
//   }

//5-8
// class Car {
//     // Change code below this line
//     constructor({brand, model, price}) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//     // Change code above this line
//   }  

//5-9
// class Car {
//     constructor({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }  
//     // Change code below this line
//       getPrice() {
//          return this.price;
//     }
//       changePrice(newPrice){
//         this.price = newPrice;
//     }
//     // Change code above this line
//   }

//5-10
// class Storage {
//     constructor(items) {
//     this.items = items;
//      }
  
//   getItems() {
//     return this.items;
//   }
  
//   addItem(newItem) {
//     return this.items.push(newItem);
//   } 
  
//   removeItem(itemToRemove){
//     return this.items.splice(this.items.indexOf(itemToRemove), 1);
//   }
//   }
//   // Change code above this line
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

//5-11
// class StringBuilder {
//     constructor(initialValue) {
//     this.value = initialValue;
//      }
  
//     getValue(){
//       return this.value;
//     }  
//     padEnd(str){
//         this.value = this.value + str ;
//     }
//     padStart(str){
//         this.value = str + this.value;
//     }
//     padBoth(str){
//       this.value = str + this.value + str;
//     }
  
//   }
  
//   // Change code above this line
//   const builder = new StringBuilder(".");
//   console.log(builder.getValue()); // "."
//   builder.padStart("^");
//   console.log(builder.getValue()); // "^."
//   builder.padEnd("^");
//   console.log(builder.getValue()); // "^.^"
//   builder.padBoth("=");
//   console.log(builder.getValue()); // "=^.^="

//5-12
// class Car {
//     // Change code below this line
//   #brand;
//     constructor({ brand, model, price }) {
//       this.#brand = brand;
//       this.model = model;
//       this.price = price;
//     }
  
//     getBrand(){
//       return this.#brand;
//     }
//     changeBrand(newBrand){
//       this.#brand = newBrand;
//     }
  
//     // Change code above this line
//   }

//5-13
// class Storage {
//     // Change code below this line
//   #items;
//     constructor(items) {
//       this.#items = items;
//     }
  
//     getItems() {
//       return this.#items;
//     }
  
//     addItem(newItem) {
//       this.#items.push(newItem);
//     }
  
//     removeItem(itemToRemove) {
//       this.#items = this.#items.filter(item => item !== itemToRemove);
//     }
//   }
  
//   // Change code above this line
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

//5-14
// class StringBuilder {
//     // Change code below this line
//   #value;
//     constructor(initialValue) {
//       this.#value = initialValue;
//     }
  
//     getValue() {
//       return this.#value;
//     }
  
//     padEnd(str) {
//       this.#value += str;
//     }
  
//     padStart(str) {
//       this.#value = str + this.#value;
//     }
  
//     padBoth(str) {
//       this.padStart(str);
//       this.padEnd(str);
//     }
//   }
  
//   // Change code above this line
//   const builder = new StringBuilder(".");
//   console.log(builder.getValue()); // "."
//   builder.padStart("^");
//   console.log(builder.getValue()); // "^."
//   builder.padEnd("^");
//   console.log(builder.getValue()); // "^.^"
//   builder.padBoth("=");
//   console.log(builder.getValue()); // "=^.^="

//5-15
  // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
//   // Change code above this line
// }

//5-16
// class Car {
//     // Change code below this line
//       static MAX_PRICE = 50000 ;
//     #price;
  
//     constructor({ price }) {
//       this.#price = price;
//     }
  
//     get price() {
//       return this.#price;
//     }
  
//     set price(newPrice) {
//         if (newPrice<=Car.MAX_PRICE){this.#price = newPrice} 
//     }
//     // Change code above this line
//   }
  
//   const audi = new Car({ price: 35000 });
//   console.log(audi.price); // 35000
  
//   audi.price = 49000;
//   console.log(audi.price); // 49000
  
//   audi.price = 51000;
//   console.log(audi.price); // 49000

//5-17
// class Car {
//     static #MAX_PRICE = 50000;
//     // Change code below this line
//     static checkPrice (price) {
//        return price > Car.#MAX_PRICE ? "Error! Price exceeds the maximum" : "Success! Price is within acceptable limits";
//     };
//     // Change code above this line
//     constructor({ price }) {
//       this.price = price;
//     }
//   }
  
//   const audi = new Car({ price: 36000 });
//   const bmw = new Car({ price: 64000 });
  
//   console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
//   console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

//5-18
// class User {
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   // Change code below this line
//   class Admin extends User {
//     static AccessLevel = {BASIC: "basic", SUPERUSER: "superuser"}
//   }

//5-19
// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class Admin extends User {
//     // Change code below this line
  
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",    
//     };
//     constructor({email, accessLevel}) {
//       super(email);
//       this.accessLevel = accessLevel;
//     }  
//     // Change code above this line
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"

//20
