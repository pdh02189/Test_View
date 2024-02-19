const express = require("express"); // 서버를 만드는 express 모듈을 호출
const app = express(); // express 객체 ==> 서버 인스턴스를 app으로 생성
const cors = require("cors");
const bodyParser = require("body-parser");
let port = 5000;
// 미들웨어 : 요청-미들웨어-서버에 위치
app.use(express.json()); // 요청 해석용
app.use(express.urlencoded({extended: false})); // json 해석용 (false)문자:기본, (true)배열, 객체 
app.use(cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
// 샘플 회원 데이터 - 메모리 vs DB (나중에 구축)
const users = [
    {
        id: "smith1234",
        name: "smith",
        password: "smith1234",
        email: "smith@hanul.com",
        phone: "SKT0621234567"
      },
      {
        id: "jack1004",
        name: "jack",
        password: "jack1004",
        email: "jack@hanul.com",
        phone: "SKT0621234567"
      },
      {
        id: "sujan777",
        name: "sujan",
        password: "sujan777",
        email: "sujan@hanul.com",
        phone: "SKT0621234567"
      }
]

app.get("/", (req, res) => {
    res.send("get 요청이 들어왔습니다.");  
    console.log(req.params); 
    // :4000/?id=test&pw=test1234  
});

app.post("/login", (req, res) => {
    const {id, password} = req.body; //요청 id, pw
    for(const user of users) { // vs for(초깃값;조건식;증감식) {...}
        if(id === user.id && password === user.password) {
            return res.json({
                status: 200,
                statusText: 'success',
                name: user.name
            });
        } else {
            // 회원아니거나 회원인데, ID/PW등이 틀린!
            return res.json({
                status: 400,
                statusText: 'fail'
            });
        }
    }
});

app.listen(port, () => {
    console.log(`server is running on ${port}...`);
});