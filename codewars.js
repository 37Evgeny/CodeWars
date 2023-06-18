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
console.log("Все работаетт")



