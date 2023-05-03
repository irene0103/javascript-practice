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
// let array = "good.";
// let n = array[0];
// function isUpperCase(){
//     if(n>= "A" && n<= "Z"){
//        return "true"; 
//     }else{
//         return "false";
//     }
// }
// console.log(isUpperCase(array));

// // 請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1
// // let string = "";
// function position(aa) {
//     for (let n = 0; n < aa.length; n++) {
//         if (aa[n] >= "A" && aa[n] <= "Z") {
//             return { index: n, uppercase: aa[n] };
//         }
//     }
//     return -1; // 如果整個迴圈都沒有找到大寫字母，回傳 -1
// }
// console.log(position("AbcD"));

// 請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n
function findSmallCount(arr,n){
    let count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<n){
            count++;
        }
    }
    return count;
}
console.log(findSmallCount([1, 2, 3, 4, 5], ));
