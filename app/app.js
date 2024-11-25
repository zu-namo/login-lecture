"use strict";
//모듈
const express = require("express");
//바디파서 필요 없어짐
// const bodyParser = require("body-parser");
const app = express();

// const PORT = 3000;
//라우팅 // index.js에서 보낸 모듈 받는다 파일명은?
const home = require("./src/routes/home");

//보이는앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');
// ejs파일에서 찾는 경로가 public 아래로 찾음
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());
// url을 통해 전달되는 테이터에 한글,공백문자등 이 포함될 때 인식안되는 문제해결
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/", home); // 미들웨어를 등록해주는 에서드. 

module.exports = app;

//////////////////////////////////////////
// const express = require("express");
// const app = express();

// app.listen(3000, () => {
//     console.log("서버가동");

// });

// app.get("/", (req, res) => {
//     res.send("여기는 루트");
// });

// app.get("/login", (req, res) => {
//     res.send("여기는 로그인");
// });
///////////////////////////////////////////////////////
// const http = require("http");
// const { url } = require("inspector");
// const app = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//     if (req.url === "/") { res.end("여기는 루트입니다."); }
//     else if (req.url === "/login") {
//         res.end("여기는 로그인입니다.");
//     }
// });

// app.listen(3001, () => {
//     console.log("서버가동시작");
// });
