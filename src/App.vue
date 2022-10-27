<template>
  <CodeEditor
    theme="monokai"
    lang="c_cpp"
  ></CodeEditor>
</template>

<script>
import CodeEditor from "./components/CodeEditor.vue";
export default {
  name: "App",
  components: {
    CodeEditor,
  }
};
</script>
