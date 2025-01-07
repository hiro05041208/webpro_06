"use strict";
const express = require("express");
const app = express();

let bbs = [];  // 本来はDBMSを使用するが，今回はこの変数にデータを蓄える

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));


app.get("/get_test", (req, res) => {
  res.json({
    answer: 0
  })
});

app.get("/add", (req, res) => {
  console.log("GET");
  console.log( req.query );
  const num1 = Number( req.query.num1 );
  const num2 = Number( req.query.num2 );
  console.log( num1 );
  console.log( num2 );
  res.json( {answer: num1+num2} );
});

app.post("/add", (req, res) => {
  console.log("POST");
  console.log( req.body );
  const num1 = Number( req.body.num1 );
  const num2 = Number( req.body.num2 );
  console.log( num1 );
  console.log( num2 );
  res.json( {answer: num1+num2} );
});

// これより下はBBS関係
app.post("/check", (req, res) => {
  // 本来はここでDBMSに問い合わせる
  res.json( {number: bbs.length });
});

app.post("/read", (req, res) => {
  // 本来はここでDBMSに問い合わせる
  const start = Number( req.body.start );
  console.log( "read -> " + start );
  if( start==0 ) res.json( {messages: bbs });
  else res.json( {messages: bbs.slice( start )});
});

app.post("/post", (req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  console.log( [name, message] );
  // 本来はここでDBMSに保存する
  bbs.push( { name: name, message: message } );
  res.json( {number: bbs.length } );
});


app.get("/calc", (req, res) => {
  const num1 = Number(req.query.num1);
  const num2 = Number(req.query.num2);
  res.json({ answer: num1 + num2 });
});

app.get("/calculator", (req, res) => {
  res.render("calc");
});


app.listen(8080, () => console.log("Example app listening on port 8080!"));