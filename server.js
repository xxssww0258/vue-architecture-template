var http = require("http");

var server = http.createServer(function(req, res) {
  console.log(req.url);
  res.setHeader("content-type", "application/json");
  if (/\/api\/getUser\?/.test(req.url)) {
    res.write(
      JSON.stringify({
        state: 1,
        errCode: 200,
        errMsg: "这是服务器数据",
        data: {
          name: "张三"
        }
      })
    );
  } else if (/\/api\/getUserList$/.test(req.url)) {
    res.write(
      JSON.stringify({
        state: 1,
        errCode: 200,
        errMsg: "这是服务器数据",
        data: [
          { name: "张三" },
          { name: "张三" },
          { name: "张三" },
          { name: "张三" }
        ]
      })
    );
  }
  res.end();
});
server.listen(4000);
