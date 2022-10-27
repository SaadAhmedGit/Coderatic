<template>
<div class="container-fluid">
  <SubmissionPage @submitCode="recieved"></SubmissionPage>
</div>
</template>

<script>
import SubmissionPage from "./components/SubmissionPage.vue";
export default {
  name: "App",
  components: {
    SubmissionPage,
  },
  methods:{
    recieved(code){
      console.log(code)
    }
  },
};
</script>

<style>
#centerContained{
  text-align: center;
  padding: 1% 0;
}
.container-fluid{
    padding: 3% 15%;
    height: 90%;

}
</style>
