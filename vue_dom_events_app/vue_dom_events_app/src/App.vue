<template lang="html">
  <div>
    <h1 id="title">Events Practise</h1>
    <language-item v-for="language in languages" :key="index" :language="language"></language-item>
  </div>
</template>

<script>
import LanguageItem from "./components/LanguageItem.vue";

export default {
  name: "app",
  data() {
    return {
      languages: [
        { name: "Ruby", learning: true },
        { name: "JavaScript", learning: true },
        { name: "Java", learning: true },
        { name: "Python", learning: false },
        { name: "TypeScript", learning: false }
      ]
    };
  },
  components: {
    'language-item': LanguageItem
  }
};
</script>

<style lang="css">
body {
  font-family: sans-serif;
  text-align: center;
}

#title {
  color: #713e5a;
}
</style>