"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }
    login() {
        const body = this.body;
        const { id, password } = UserStorage.getUserInfo(body.id);
        console.log("hihi");
        if (id) {
            if (id === body.id && password === body.password) {
                console.log("good");
                return { success: true };
            }
            return { success: false, msg: "틀린비밀번호" };
        }
        return { success: false, msg: "아이디 없음" };
    }
}
module.exports = User;