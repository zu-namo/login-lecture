"use strict";
//node app.js 로 서버실행이 아니라
//node ./bin/www.js 서버실행
const PORT = 3000;
const app = require('../app.js');
app.listen(PORT, () => {
    console.log("서버가동");
});