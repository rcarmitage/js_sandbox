<template lang="html">
    <div class="language-style">
      <div v-bind:key="language.id" v-for="language in languages">
        <LanguageItem v-bind:language="language" />
      </div>
    </div>
</template>

<script>
import LanguageItem from './LanguageItem.vue';

export default {
  name: "Languages",
  components: {
    LanguageItem
  },
  props: ["languages"]
};
</script>

<style lang="css" scoped>
.language-style {
  color: #E8D6CB; 
}
</style>