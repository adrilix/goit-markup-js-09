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

//12

//13

//14

//15

//16

//17

//18

//19

//20

//21

//22

//23

//24

//25

//26

//27

//28

//29

//30

//30

//31

//32

//33

//34

//35

//36

//37

//38

//39

//40

//41