const loginForm = document.querySelector("#login_form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#floatingInput").value;
    const pwpassword = document.querySelector("#floatingPassword").value;
    fetch("http://localhost:5000/login", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        password: pwpassword,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        if(result.message === "ok") {
          alert('로그인을 환영합니다!');
          location.href = "index.html";
        }
      });
  });