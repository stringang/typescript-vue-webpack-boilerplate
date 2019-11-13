<template>
  <div>
    <h1>\{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'HelloWorld',
    data() {
      return {
        msg: 'fullStack-TypeScript-Vue-Webpack'
      };
    }
  });
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
