"use strict";
//function hello(req,res){}
const hello = (req, res) => {
    res.render('home/index');
}
const login = (req, res) => {
    res.render('home/login');
}

//내보낸다.  index.js 가보자
module.exports = {
    hello,
    login
}