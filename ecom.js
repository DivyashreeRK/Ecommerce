let Login = document.querySelector('.loginForm');

let RegisterLink = document.querySelector('.register-link');
RegisterLink.addEventListener('click', () => {
    Login.classList.add('active');
});

let LoginLink = document.querySelector('.login-link');
LoginLink.addEventListener('click', () => {
    Login.classList.remove('active');
});

let LoginReg = document.querySelector('.btnLogin');
let Hero = document.getElementById("hero");

LoginReg.addEventListener('click', () => {
    Login.classList.add('active-popup');
    Login.style.display = 'flex';
    Hero.style.filter = 'blur(5px)';
});

let ShopBtn = document.getElementById("shopBtn");

ShopBtn.addEventListener("click", ()=>{
    alert("Please Login!!!");
});

const closeIcon = document.getElementsByClassName('form-close')[0];
closeIcon.addEventListener('click', function () {
    const loginForm = document.querySelector('.loginForm');
    loginForm.style.display = 'none';
    Login.classList.remove('active-popup');
    Hero.style.filter = 'blur(0)';
});

const closeIcon2 = document.getElementsByClassName('form-close')[1];
closeIcon2.addEventListener('click', function () {
    const loginForm = document.querySelector('.loginForm');
    loginForm.style.display = 'none';
    Login.classList.remove('active-popup');
    Hero.style.filter = 'blur(0)';
});

let LoginBtn = document.getElementById("LogBtn");

document.forms.myForm.addEventListener("submit",function(e){
    e.preventDefault();
    window.location.href = "shop.html";

});

document.forms.myForm2.addEventListener("submit",function(e){
    e.preventDefault();
    window.location.href = "shop.html";
});



