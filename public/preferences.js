document.getElementById("dropdownMenu2").innerHTML = selectedLang;

//Bootstrap Dropdown
$(document).ready(function () {
    $(".dropdown-toggle").dropdown();
  });

//ACE properties      
ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.setOptions({
  autoScrollEditorIntoView: true,
  copyWithEmptySelection: true,
  enableBasicAutocompletion: true,
  enableSnippets: true,
  enableLiveAutocompletion: true,
});
editor.setShowPrintMargin(false);

//POST code from ACE
function postToURL(acecode) {
    document.getElementById("temp_code_area").value = acecode;
        if (document.getElementById("temp_extention").value === "") {
          alert("Please select a language before uploading!");
        } else {
          var request = {
            mycode: acecode,
            ext: document.getElementById("temp_extention").getValue(),
          };
          let requestString = JSON.stringify(request);
          console.log(requestString)
          let xhr = new XMLHttpRequest();
          xhr.open("POST", "http://localhost:5000/", true);
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.send(requestString);
        }
}

//Change Selected Language
function changeLang(language, aceLang, extention) {
  selectedLang = language;
  document.getElementById("dropdownMenu2").innerHTML = selectedLang;
  document.getElementById("temp_extention").value = extention;
  editor.session.setMode("ace/mode/" + aceLang);
}

//POST XMLHTTP request
