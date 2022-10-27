<template>
  <CodeEditor
    v-bind:options="options"
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
  },
  data() {
    return {
      options: {
        type: Object,
        default: {
      autoScrollEditorIntoView: true,
        copyWithEmptySelection: true,
          enableBasicAutocompletion: true,
            enableSnippets: true,
              enableLiveAutocompletion: true
    
  }
}
   }
  }
};
</script>
