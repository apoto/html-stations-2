function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  //console.warn("Warning!");
  var text = document.getElementById("text");

  if (e.target.checked) {
    text.style.backgroundColor = "red";
  } else {
    text.style.backgroundColor = "white";
  }
}
