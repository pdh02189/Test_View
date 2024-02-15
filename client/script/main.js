window.addEventListener("DOMContentLoaded", function () {
  // document.querySelector("#user_id").focus();
  const loginForm = document.querySelector("#login_form");
  loginForm.addEventListener("submit", function (e) {
    // e.preventDefault();
    let sendData = {
      id: document.querySelector("#floatingInput").value.trim(),
      password: document.querySelector("#floatingPassword").value.trim(),
    };
    const xhr = new XMLHttpRequest();
    const method = "POST"; // 받을때 GET, 보낼때 POST , 수정 PUT, PATCH, 삭제 DELETE
    const url = "http://localhost:5000/login";
    xhr.open(method, url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        let received = JSON.parse(xhr.response);
        if (received.status === 200) {
          alert(`${received.name}님, 로그인 되었습니다.`);
        } else {
          alert('아이디 또는 비밀번호를 확인하세요');
        }
      }
    };
    xhr.setRequestHeader("content-type", "application/json"); //json 타입 데이터라고 알려준다
    xhr.send(JSON.stringify(sendData)); //post 일때 전송할 데이터
  });
});