<template>
<div id="container">
    <div id="title">
    <h1>Coderatic</h1>
  </div>
<CodeEditor lang="c_cpp" theme="monokai"></CodeEditor>
</div>
</template>

<script>
import CodeEditor from "./CodeEditor.vue";
export default{
    name: "SubmissionPage",
    components:{
        CodeEditor,
    }
}

</script>

<style>
#container{
    padding: 3% 15%;
}
#title{
    text-align: center;
    padding: 1% 0 1% 0;
}
</style>