"use strict"
const id = document.querySelector('#id');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('button');
// console.log(id);
loginBtn.addEventListener('click', login);

function login() {
    console.log('btn click');
    console.log(id.value);
    const req = {
        id: id.value,
        password: password.value
    }
    console.log(req);
}
