
// function hello(){
//     document.write("你好");
// }
// hello();

// function add(num1,num2){
//     document.write(num1+num2);
//     document.write("<br/>");
//     return 10;
//     document.write("hello");
// }
// value = add(3,2);
// document.write(value);

// let movie = {
//     title:"模仿犯",
//     maker:"南方電影有限公司",
//     series:10,
//     actors:[
//         {
//             name:"吳慷仁",
//             age:40,
//             is_male:true,
//         },
//         {
//             name:"柯佳嬿",
//             age:38,
//             is_male:false,
//         },
//         {
//             name:"柯佳嬿",
//             age:38,
//             is_male:false,
//         },

//     ]
// }

// for(let n=0 ; n<movie.actors.length;n++){
//     for(let item in movie.actors[n]){
//         document.write(item + ": " + movie.actors[n][item]);
//     }
// };
// let array = movie.actors.push({
//     name:"庹宗華",
//     age:69,
//     is_male:true,
// });
// movie.actors.forEach(function(actors){
//     for(let item in actors){
//         document.write(item + actors[item])
//         console.log(actors[item]);
//     }
// }
// );


// var vegetables = ['parsnip', 'potato'];
// var moreVegs = ['celery', 'beetroot'];
// Array.prototype.push.apply(vegetables, moreVegs);
// console.log(vegetables); 


// function addUpTo(n) {
//     let result = 0;
//     for(let i=0;i<=n;i++){
//     result += i
//     }
//     return result;
// }
// let result = addUpTo(100);
// console.log(result);

//反轉陣列
let family = ["aa", "bb", "cc", "dd", "ee", "ff"];
//0 ,1 ,2 ,3 ,4 , 5
reverse_family = [];
for (let i = family.length - 1; i >= 0; i--) {
    let families = family[i];
    reverse_family.push(families);
}
console.log(reverse_family);

//找出陣列中最大的數字
//解法一
function findBiggest(arr) {
    if (arr.length == 0) {
        return undefined;
    }
    let biggestNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > biggestNumber) {
            biggestNumber = arr[i];
        }
    }
    return biggestNumber;
}
let arr = [5, 99, 48, 423, 999, 4, 0];
empty = [];
console.log(findBiggest(arr));

//解法二
function findBiggest(arr) {
    //如果輸入的陣列是空的，則回傳 undefined
    if (arr.length === 0) {
        return undefined;
    }

    // 設定初始值為第一個元素
    let max = arr[0];

    // 使用 for 迴圈遍歷陣列中的每個元素
    for (let i = 1; i < arr.length; i++) {
        // 如果陣列中的當前元素比最大值還大，則將當前元素設為最大值
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    // 回傳最大值
    return max;
};

//演算法
//解法一
function addUpTo(n){
    let result = 0;
    for(let i = 0; i<=n;i++){
        result += i;
    }
    return result
}
console.log(addUpTo(100));
//解法二
//等差級數公式=((首項+末項)*項數)/2
function addUpTo(n){
    let result = ((1+n)*n)/2;
    return result;
}
console.log(addUpTo(10));