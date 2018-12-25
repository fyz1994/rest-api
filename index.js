var express = require('express');
var app = express();

app.configure(function () {
  //默认情况下Express并不知道该如何处理该请求体，因此我们需要增加bodyParser中间件，用于分析  
  //application/x-www-form-urlencoded和application/json  
  //请求体，并把变量存入req.body。我们可以像下面的样子来“使用”中间件[这个保证POST能取到请求参数的值]：     
  app.use(express.bodyParser());
});

//设置跨域访问
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//处理POST请求  
app.get('/hello', function (req, res) {
  res.send('hello world');
});

//现在可以绑定和监听端口了，调用app.listen()方法，接收同样的参数，比如：  
app.listen(8080);
console.log('Listening on port 8080');  
