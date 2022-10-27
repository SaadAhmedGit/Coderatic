<template>
  <div class="editor_binding_class">
    <div id="editor"></div>
  </div>
</template>

<script>
import ace from "ace-builds";
export default {
  name: "CodeEditor",
  props: {
    theme: String,
    lang: String,
  },
  data() {
    return {
      editor: "",
    };
  },
  mounted() {
    ace.require("ace/ext/language_tools");
    this.editor = ace.edit("editor");
    this.editor.setShowPrintMargin(false);
    this.editor.setTheme("ace/theme/" + this.theme);
    this.editor.session.setMode("ace/mode/" + this.lang);
    this.editor.setOptions({
      autoScrollEditorIntoView: true,
      copyWithEmptySelection: true,
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true,
    });
  },
};
</script>

<style>
#editor {
  height: 600px;
  top: 0;
  right: 0;
  bottom: 0;
  font-size: large;
  left: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  border-bottom-right-radius: 0px;
}
</style>
