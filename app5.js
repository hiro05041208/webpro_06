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
  else if( num==2 ) luck = '中吉';
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

app.get("/soccer", (req, res) => {
  const num = Math.floor(Math.random() * 150 + 1);
  let soccer = '';
  let reaction = '';
  
  if (num == 1) {
      soccer = 'ヨハン クライフ';
      reaction = 'あなたは喜んでいる';
  } else if (num == 2) {
      soccer = 'フランチェスコ トッティ';
      reaction = 'あなたは喜んでいる';
  } else if (num == 3) {
      soccer = 'フリスト ストイチコフ';
      reaction = 'あなたは喜んでいる';
  } else if (num >= 4 && num <= 11) {
      soccer = 'エピック選手';
      reaction = 'あなたは少し喜んだ';
  } else if (num >= 12 && num <= 150) {
      soccer = 'ノーマル選手';
      reaction = 'あなたは残念がった';
  }
  
  console.log('あなたが出したのは' + soccer + 'です。' + reaction);
  res.render('soccer', { number: num, soccer: soccer, reaction: reaction });
});  

app.listen(8080, () => console.log("Example app listening on port 8080!"));