"use strict";
const express = require("express");
const router = express.Router();

//2.home.ctrl.js 모듈 hello login을 받아쓴다.
const ctrl = require('./home.ctrl');


router.get("/", ctrl.hello//(req, res) => {
    // res.send("여기는 루트");
    // res.send(`<html> </html>`);
    //res.render('home/index');}
);

router.get("/login", ctrl.login
    //     (req, res) => {
    //     res.render('home/login');
    // }
);

module.exports = router; 