// // 分別用 for loop 以及 while 迴圈，印出 1~9
// for(let n=1;n<=9;n++){
//     console.log(n);
// }
// let i = 1;
// while(i<=9){
//     console.log(i);
//     i++;
// }

// // 請寫一個函式叫做 print，接收一個是數字的參數 n，並且印出 1~n
// function print(n){
//     for(let i=1;i<=n;i++){
//         console.log(i);
//     }
// }
// print(6);

// 請寫一個函式叫做  printEvery3，印出 1,4,7,10,...,88.
// for loop
// function printEvery3() {
//     for(let i = 1 ; i<=88 ; i+=3){
//         console.log(i);
//     }
// }

// while loop
// function printEvery3(){
//     let i=1;
//     while(i<=88){
//         console.log(i);
//         i+=3;
//     }
// }
// printEvery3();

// // 寫一個函式 star，接收一個參數 n，並印出 n 個 *
// let stars ="";
// function star(n){
//     for(let i =1;i<=n;i++){
//         stars += "*";
//     }
//     console.log(stars);
// }
// star(6);

// // 請寫出一個叫做 starReturn 的 function 並且接受一個參數 n，能回傳 n 個 *
// function starReturn(n){
//     let stars ="";
//     for(let i =1;i<=n;i++){
//         stars += "*";
//     }
//     return stars;
// }
// console.log(starReturn(6));

// // 請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫

// function isUpperCase(str) {
//     if (str.length == 0) {
//         return false;
//     }
    //     if(str[0]==str[0].toUpperCase()){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // 簡化為
    // return str[0] == str[0].toUpperCase();
// }
// console.log(isUpperCase("sDaAsfaF"));

// // 請寫一個叫做 isAllUpperCase 的 functuon，並且接收一個字串，回傳這個字串的是否皆為大寫
// function isAllUpperCase(str) {
//     if (str.length == 0) {
//         return false;
//     }
//     let allUpperCase = true;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] != str[i].toUpperCase()) {
//             allUpperCase = false;
//         }
//     }
//     return allUpperCase;
// }

// console.log(isAllUpperCase("ABCD")); // returns true
// console.log(isAllUpperCase("")); // returns false
// console.log(isAllUpperCase("ABCDEFGHIJKLm")); // returns false


// // 請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1
// function position(str) {
//     for (let n = 0; n < str.length; n++) {
//         if (str[n] == str[n].toUpperCase()) {
//             return str[n] + " " + n;
//         }
//     }
//     return -1; // 如果整個迴圈都沒有找到大寫字母，回傳 -1
// }
// console.log(position("abcd")); // prints -1
// console.log(position("AbcD")); // prints A 0
// console.log(position("abCD")); // prints C 2


// // 請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n
// function findSmallCount(arr,n){
//     let count = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<n){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(findSmallCount([ 3, 4, 5],8 ));

// // 請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和

// function findSmallerTotal(arr,n){
//     let total = 0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<n){
//             total += arr[i];
//         }
//     }
//     return total;
// }
// console.log(findSmallerTotal([1, 2, 3], 3)) // returns 3
// console.log(findSmallerTotal([1, 2, 3], 1)) // returns 0
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 999)) // returns 25
// console.log(findSmallerTotal([3, 2, 5, 8, 7], 0)) // returns 0

// // 請寫一個函式 findAllSmall，接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）
// // ***push
// function findAllSmall(arr,n){
//     let array = [];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<n){
//             array.push(arr[i]);
//         }
//     }
//     return array;
// }

// console.log(findAllSmall([1, 2, 3], 10)); // returns [1, 2, 3]
// console.log(findAllSmall([1, 2, 3], 2)); // returns [1]
// console.log(findAllSmall([1, 3, 5, 4, 2], 4)); // returns [1, 3, 2]

// // // 請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和
// function sum(arr) {
//     let total = 0;
//     for(let i = 0; i<arr.length;i++){
//        total +=arr[i];
//     }
//     return total;
// }


// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // returns 55
// console.log(sum([])); // return 0
// console.log(sum([-10, -20, -30])); // return -60