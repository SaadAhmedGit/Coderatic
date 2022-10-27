<template>
  <div class="editor_binding_class">
    <div id="editor"></div>
  </div>
</template>

<script lang="ts">
import ace from "ace-builds";
export default {
  name: "CodeEditor",
  props: {
    options: Object,
    theme: String,
  },
  data() {
    return {
      editor: "",
    };
  },
  mounted: function () {
    ace.require("ace/ext/language_tools");
    var editor = ace.edit("editor");
    editor.setShowPrintMargin(false);
    this.setoptions()   
    this.settheme()   
 
  },
  methods: {
    setoptions() {
        this.editor.setOptions(this.options)
    },
    settheme() {
        this.editor.setTheme("ace/theme/"+this.theme);
    },
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
