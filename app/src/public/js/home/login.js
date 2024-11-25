"use strict"
// login.ejs를 컨트롤
const id = document.querySelector('#id');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('button');
// console.log(id);
loginBtn.addEventListener('click', login);

function login() {
    // console.log('btn click');
    // console.log(id.value);
    const req = {
        id: id.value,
        password: password.value
    };
    // console.log(req);
    // console.log(JSON.stringify(req));

    // 서버로 로그인 데이터 보내기
    fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    }).then((res) => res.json())
        // .then(console.log);
        .then((res) => {
            if (res.success) {
                location.href = "/";
            } else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            // console.error(new Error("로그인 중 에러 발생"));
            console.error("로그인 중 에러 발생");
        });


}
