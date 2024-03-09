(function () {
  var path = window.location.pathname;
  var link = "https://practice.course.rs" + path;
  var word = "English";
  var lang = "en";
  var changeLang = "Switch to English";

  if (window.location.href.indexOf("en.") == -1) {
    link = "https://practice.course.rs" + path;
    word = "Переключить на английский";
    lang = "ru";
    changeLang = "Switch to Russian";
  }

  var lang_node = "";
  if (link != "") {
    lang_node =
      '<a href="' +
      link +
      '" title="' +
      changeLang +
      '" aria-label="' +
      changeLang +
      '"><i id="change-language-button" class="fa fa-language"> ' +
      word +
      "</i></a>";
  }

  console.log(lang_node);
  var insertNode = document.getElementsByClassName("right-buttons");
  if (insertNode.length > 0) {
    var html = insertNode[0].innerHTML;
    insertNode[0].innerHTML = html + lang_node;
  }
})();
