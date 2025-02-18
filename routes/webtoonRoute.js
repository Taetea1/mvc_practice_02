const express = require("express");
const route = express.Router();

const webtoonController = require("../controllers/webtoonController");

// getWebtoons를 함수호출처럼 써서 오류남(이건 함수가 아닌가??)
route.get("/", webtoonController.getWebtoons);

module.exports = route;
