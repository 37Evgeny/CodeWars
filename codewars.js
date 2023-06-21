// Вывести массив строк в одну строку 
// words=['hello', 'world', 'this', 'is', 'great'];
// stringWold="";
// function smash (words) {
//     return stringWold=words.join(' ')
//  };
//  smash(words)
//  console.log(stringWold)

// удаление первого и последнего символа
// let str='eloquent';
// strSlice="";
// function removeChar(str){
//     //You got this!
//     return strSlice=str.slice(1,-1)
//    };
//    removeChar(str)
//    console.log(strSlice)

// преобразование имени в инициалы
// let name="sam harris";
// let charName="";

// function abbrevName(name){

//      abbrev=name.split(/\s+/).map((i) =>  i.substring(0,1).toUpperCase()
//      + '.' ).join('');
//      return charName=abbrev.slice(0,-1)
    
// }
// abbrevName(name)
// console.log(charName)

// смена знака у числа
// let array = [1,2,3,4,5];
// let arr=[];
// function invert(array) {
//     return arr=array.map(i=>i=-+i);
//     console.log(array)
//  }
//  invert(array)
//  console.log(arr)
 
// перевернуть строку
// let str='world';
// let test="";
// function solution(str){
//   return test=str.split('').reverse().join("")
// }
// solution(str)
// console.log(test)

// найти слово в массиве и вывести его индекс
// let haystack=["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
// let needle
// function findNeedle(haystack) {
//     needle=haystack.indexOf("needle")
//     return needle='found the needle at position ' + needle
//   }
//   findNeedle(haystack)
//   console.log(needle)

// найти минимальное и максимальное значение
// let list=[4,6,2,1,9,63,-134,566];
// let minValue=0;
// let maxValue=0;
// var min = function(list){
//    return Math.min(...list);
// }
// var max = function(list){
//     return Math.max(...list);
// }
// minValue=min(list)
// maxValue=max(list)
// console.log(minValue)
// console.log(maxValue)

// по порядку умножить массив 
// let x=[4, 1, 1, 1, 4];
// function grow(x){
//     let val=x[0];
//     for(let i=1;i<x.length;i++){
       
//         val*=x[i]
//     }
//     return val
// }
// grow(x)
// console.log(val)

// найти среднбб оцену и сравнить ее со своей
// let classPoints=[12, 23, 34, 45, 56, 67, 78, 89, 90];
// let yourPoints=88;
// let average=0;
// let points=false

// function betterThanAverage(classPoints, yourPoints) {
//     classPoints.push(yourPoints);
    
//     for(let i = 0; i<classPoints.length; i++){
//         average +=classPoints[i];
//     }
//     average =average / classPoints.length

//     return points=average<yourPoints;
//   }

//   betterThanAverage(classPoints, yourPoints);
//   console.log(points)
// лучшее решение с кодварс
//   function betterThanAverage(classPoints, yourPoints) {
//     return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
//   }


// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.
// let arrayOfSheep = [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true];
// let sum=0;
//     function countSheeps(arrayOfSheep) {
//          sum=arrayOfSheep.filter(e=>e===true)
//         return sum = sum.length
//     }
//     countSheeps(arrayOfSheep)
// решение лучшее
// // function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }

// найти минимальное число в массиве
// let arr = [34, 15, 88, 2];
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return args=Math.min(...args)
//     }
//   }

// удалить из строки пробелы
// let x = "8 j 8   mBliB8g  imjB8B8  jl  B";
// let str=" ";
// function noSpace(x){
//     return str= x.replaceAll(' ', '')
// }
// noSpace(x);
// console.log(str)
// решение через регулярку
// function noSpace(x){
//     return x.replace(/\s/g, '');
//   }

// сложить все элементы массива с приведением типов к числу
// let x = [9, 3, '7', '3'];
// let sum=0;
// function sumMix(x){
//     return sum = x.reduce((a, b)=>Number(a)+Number(b), 0)
// }
// sumMix(x)
// console.log(sum)
// function sumMix(x){
//     return x.map(a => +a).reduce((a, b) => a + b);
//   }


// если число положительное вернуть отрицательное, если отрицательное то действия не требуются
// let num=0;
// let res;
// function makeNegative(num) {
//     if(num>0){
//         return res=-num;
//     }else if(num ==0){
//         return res=num;
//     }else if(num<0){
//         return res=num
//     }
//   }
//   makeNegative(num)
//   console.log(res)
//   решение 
//   function makeNegative(num) {
//     return -Math.abs(num);
//   }

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
// let pin = '1111'
// let pinval =false;
// function validatePIN (pin) {
//     pin=pin.replace(/[\D]+/g)
//     if( Number(pin)>0 && String(pin).length === 4 && Number(pin) % 1 == 0 || Number(pin)>0 && Number(pin) % 1 == 0 && String(pin).length === 6 ){
//         return pinval= true;
//     }else if(pin === '0000' || pin === '000000'){
//        return  pinval = true;
//       }else{
//         return  pinval = false;
//     }
// }
//   validatePIN(pin)
//   console.log(pinval)
// лучшее решение
//   function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin)
//   }



