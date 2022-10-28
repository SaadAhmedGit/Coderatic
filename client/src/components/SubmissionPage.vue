<template>
<div id="container">
    <div id="centerContained">
    <h1>Coderatic</h1>
</div>
<CodeEditor :lang="language" :theme="setTheme" @submitCode="sendCode"></CodeEditor>
</div>
</template>

<script>

import CodeEditor from "./CodeEditor.vue";
export default{
    name: "SubmissionPage",
    components:{
        CodeEditor,
    },
    data(){
        return{
            language: "c_cpp",
            setTheme: "monokai",
            submit: false
        }
    },
    methods:{
        sendCode(code){
            this.$emit('submitCode', code)
        }
    }
}

</script>

<style>

</style>