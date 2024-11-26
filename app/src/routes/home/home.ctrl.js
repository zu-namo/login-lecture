"use strict";
const { name } = require("ejs");
//function hello(req,res){}

const UserStorage = require("../../models/UserStorage");
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
        // console.log(req.body);
        const id = req.body.id;
        const password = req.body.password;
        // const userStorage = new UserStorage();
        const users = UserStorage.getUsers("id", "password");
        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.password[idx] === password) {
                // console.log('success');
                response.success = true;
                return res.json(response);
            }
        }
        response.success = false;
        response.msq = "로그인실패";
        return res.json(response);
    }
}

//내보낸다.  index.js 가보자
module.exports = {
    output,
    process
}    