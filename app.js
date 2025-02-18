const express = require("express");
const app = express();
const port = 3000;

const webtoonRouter = require("./routes/webtoonRoute");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static("public"));

app.use("/webtoons", webtoonRouter);

app.set("view engine", "ejs");
app.set("views", "./views");

// 홈 라우트
app.get("/", (req, res) => {
  res.render("main");
});

app.listen(3000, () => {
  console.log("server is running:", port);
});
