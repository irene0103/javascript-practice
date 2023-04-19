function reply() {
    let account = document.getElementById("account").value;
    let password = document.getElementById('password').value;
    console.log(account);
    console.log(password);
}

//onChange
function select() {
    let x = document.getElementById('dropdown').value;
    document.getElementById("show").innerHTML = "選擇的是:" + x;
    document.getElementById("image").src = "images/" + x + ".png"; //images文件夾裡面的圖片
    document.getElementById("image1").src = "images/" + x + ".png"; //images文件夾裡面的圖片
}

//onFocus,onBlur,Match登入密碼驗證
let password = document.getElementById('password');
let lowercase = document.getElementById('lowercase');
let uppercase = document.getElementById('uppercase');
let length = document.getElementById('length');
let number = document.getElementById('number');
//onfocus and on blur
password.onfocus = function () {
    document.getElementById('rule').style.display = 'block';
}
password.onblur = function () {
    document.getElementById('rule').style.display = 'none';
}
//當使用者輸入時 (onkeyup) 透過 if else 來確認是否 match

password.onkeyup = function () {
    //確認是否小寫
    var lowerLetter = /[a-z]/g;
    if (password.value.match(lowerLetter)) {
        lowercase.classList.remove('invalid');
        lowercase.classList.add('valid');
    } else {
        lowercase.classList.add('invalid');
        lowercase.classList.remove('valid');
    }
    //確認是否大寫
    var upperLetter = /[A-Z]/g;
    if (password.value.match(upperLetter)) {
        uppercase.classList.remove('invalid');
        uppercase.classList.add('valid');
    } else {
        uppercase.classList.add('invalid');
        uppercase.classList.remove('valid');
    }
    //確認是否包含1個數字
    var num = /[0-9]/g;
    if (password.value.match(num)) {
        number.classList.remove('invalid');
        number.classList.add('valid');
    } else {
        number.classList.add('invalid');
        number.classList.remove('valid');
    }
    //確認長度至少8位

    if (password.value.length >= 8) {
        length.classList.remove('invalid');
        length.classList.add('valid');
    } else {
        length.classList.add('invalid');
        length.classList.remove('valid');
    }
}

//顯示密碼
function togglePassword() {
    let passwordInput = document.getElementById('password');
    let toggleButton = document.querySelector('.toggle');
    //檢查類型是否為密碼，將類型更改為text
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.classList.add('fa-eye');
        toggleButton.classList.remove('fa-eye-slash');
    } else {
        //如果密碼輸入框的類型不是 "password"，則將其類型更改為 "password"
        passwordInput.type = 'password';
        toggleButton.classList.remove('fa-eye');
        toggleButton.classList.add('fa-eye-slash');
    }
}
//取值
function getData() {
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;
    console.log(username);
    console.log(password);
}