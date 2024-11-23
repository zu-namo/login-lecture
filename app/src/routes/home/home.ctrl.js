"use strict";
//function hello(req,res){}
const users = {
    id: ['zunamo', '김모성', '김모성님'],
    password: ['1234', '12345', '12345']
}

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

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.password[idx] === password) {
                // console.log('success');
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            mag: '로그인실패'
        });
    }
}

//내보낸다.  index.js 가보자
module.exports = {
    output,
    process
}    