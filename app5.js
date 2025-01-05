const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/luck", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num　<=2 ) luck = '中吉';
  console.log( 'あなたの運勢は' + luck + 'です' );
  res.render( 'luck', {number:num, luck:luck} );
});

app.get("/janken", (req, res) => {
  // ここに勝敗の判定を入れる
  // 今はダミーで人間の勝ちにしておく
  let judgement = '';
  if (hand == cpu) {
    judgement = '引き分け';
  } else if (
    (hand == 'グー' && cpu == 'チョキ')
    (hand == 'チョキ' && cpu == 'パー')
    (hand == 'パー' && cpu == 'グー')
  ) {
    judgement = '勝ち';
    win += 1;
  } else {
    judgement = '負け';
  }

  total += 1;

  const display = {
    your: hand,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  };

  res.render('janken', display);
});

// じゃんけんで勝敗をつける



app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(__dirname + "/public"));

// `/age` ルート（GET）
app.get("/age", (req, res) => {
  res.render("age");
});

// `/age` ルート（POST）
app.post("/age", (req, res) => {
  const age = req.body.age;
  const ageMessage = age >= 18 ? "成人です" : "未成年です";
  res.render("age", { age, ageMessage });
});


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(__dirname + "/public"));

// `/weather` ルート（GET）
app.get("/weather", (req, res) => {
  res.render("weather");
});

// `/weather` ルート（POST）
app.post("/weather", (req, res) => {
  const weather = req.body.weather;
  let advice = '';

  if (weather === "晴れ") {
    advice = "今日は外に出かけるのにぴったりです！";
  } else if (weather === "雨") {
    advice = "傘を持っていきましょう！";
  } else if (weather === "雪") {
    advice = "暖かい服を着て外出しましょう！";
  } else { (weather === "不明")
    advice = "天気の情報が不明です。";
  }

  res.render("weather", { weather, advice });
});


app.get("/get_test", (req, res) => {
  res.json({
    answer: 0
  })
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
