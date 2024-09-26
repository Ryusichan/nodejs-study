const express = require("express");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

// 앞에 라우팅 그리고 콜백함수위치 request, response
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// req방식에는 querry와 params 2가지 방법이 있다.
app.get("/user/:id", (req, res) => {
  //   const p = req.params;
  //   console.log(p);
  const q = req.query;
  //   http://localhost:3000/user/123?q=joco&&age=20
  // { q: 'joco', age: '20' }
  console.log(q);
  res.send({ message: `Hello ${q.age}` });
});

app.get("/sound/:name", function (req, res) {
  const { name } = req.params;
  if (name === "dog") {
    res.send("멍멍!");
  } else if (name === "cat") {
    res.send("야옹!");
  } else {
    res.send("뭐야?");
  }
});

app.get("/cat", function (req, res) {
  res.send("야옹!");
});

//항상 듣고있다
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
