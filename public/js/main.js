// public/js/main.js
document.getElementById("webtoonBtn").addEventListener("click", () => {
  axios({
    method: "get",
    url: "/webtoons",
  })
    .then((response) => {
      // 요청 성공 시 toon 페이지로 이동
      window.location.href = "/webtoons";
    })
    .catch((error) => {
      console.error("실패: ", error);
    });
});
