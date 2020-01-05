<template lang="html">
    <div>
      <div v-bind:key="language.id" v-for="language in languages">
        <LanguageItem v-bind:language="language" v-on:del-language="$emit('del-language', language.id)" />
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
</style>