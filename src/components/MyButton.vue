<template>
  <button class="btn btn-outline-light btn-lg" @click="$emit('submit')">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    text: String,
  }
};
</script>

<style></style>
