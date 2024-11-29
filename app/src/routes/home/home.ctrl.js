"use strict";
// const { name } = require("ejs");
//function hello(req,res){}

const User = require("../../models/User");
const output = {
    home: (req, res) => {
        res.render('home/index');
    },
    login: (req, res) => {
        res.render('home/login');
    }
}
const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        //console.log(response);
        return res.json(response);
    }
}

//내보낸다.  index.js 가보자
module.exports = {
    output,
    process
}

// const user = new User(req.body);
// const response = user.login();
// return res.json(response);