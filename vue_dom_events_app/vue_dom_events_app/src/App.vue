<template lang="html">
  <div id="app">
    <h1 id="title">Events Practise</h1>
    <Languages v-bind:languages="languages" />
  </div>
</template>

<script>
import Languages from "./components/Languages.vue";

export default {
  name: "app",
  components: {
    Languages
  },
  data() {
    return {
      languages: [
        { id: 1, name: "Ruby", learning: true },
        { id: 2, name: "JavaScript", learning: true },
        { id: 3, name: "Java", learning: true },
        { id: 4, name: "Python", learning: false },
        { id: 5, name: "TypeScript", learning: false }
      ]
    };
  }
};
</script>

<style lang="css">
* {
  box-sizing: border-box;
  /* margin: 0; */
  padding: 0;
}

body {
  font-family: sans-serif;
  text-align: center;
  line-height: 1.5rem;
}

#title {
  color: #713e5a;
}

#list-item {
  font-weight: bold;
  color: #413C58;  
}
</style>