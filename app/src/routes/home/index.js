"use strict";
const express = require("express");
const router = express.Router();

//2.home.ctrl.js 모듈 hello login을 받아쓴다.
const ctrl = require('./home.ctrl');


router.get("/", ctrl.output.home//(req, res) => {
    // res.send("여기는 루트");
    // res.send(`<html> </html>`);
    //res.render('home/index');}
);

router.get("/login", ctrl.output.login
    //     (req, res) => {
    //     res.render('home/login');
    // }
);
// 프로세스로 보넨다
router.post('/login', ctrl.process.login);

module.exports = router; 