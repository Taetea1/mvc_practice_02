const webtoonModel = require("../models/webtoonModel");

const getWebtoons = (req, res) => {
  const webtoon = webtoonModel.getAllWebtoon();
  res.render("webtoon/toon", { webtoon });
};

module.exports = { getWebtoons };
