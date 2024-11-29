"use strict";

// const use  = require("../routes/home");

class UserStorage {
    // #는 프라이빗변수로 만드는 기호
    static #users = {
        id: ['zunamo', '김모성', '김모성님'],
        password: ['1234', '12345', '12345'],
        name: ['주영일', '아름', '다움']
    }
    static getUsers(...fields) {
        const users = this.#users;
        // console.log(users.fields[0]);
        const newUsers = fields.reduce((newUser, field) => {
            // console.log(`${newUser} ${field}`);
            if (users.hasOwnProperty(field)) {
                console.log(field);
                newUser[field] = users[field];
            }
            return newUser;
        }, {});
        console.log(newUsers);
        return newUsers;
    }
    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id)
        const usersKeys = Object.keys(users); //=>[id,password,name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }
}
module.exports = UserStorage; 9