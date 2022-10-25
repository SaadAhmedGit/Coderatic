<template>
  <v-ace-editor
    id="editor"
    v-model:value="content"
    @init="editorInit"
    lang="c_cpp"
    theme="dracula"
    :options="{
      autoScrollEditorIntoView: true,
      copyWithEmptySelection: true,
      enableBasicAutocompletion: true,
      enableSnippets: true,
      enableLiveAutocompletion: true,
    }"
  />
</template>
<script lang="ts">
//import CodeEditor from "./components/CodeEditor.vue";
import { VAceEditor } from "vue3-ace-editor";
export default {
  name: "App",
  components: {
    VAceEditor,
  },
};
</script>
<style scoped>
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
