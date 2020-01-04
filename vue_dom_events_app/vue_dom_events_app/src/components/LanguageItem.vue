<template>
  <div class="language-item" v-bind:class="{'is-learning':language.learning}">
    <p>
        <input type="checkbox" v-on:change="markLearning">
        {{ language.name }}</p>
  </div>
</template>

<script>
export default {
  name: "LanguageItem",
  props: ["language"],
  methods: {
      markLearning() {
          this.language.learning = !this.language.learning;
      }
  }
}
</script>

<style lang="css" scoped>
  .language-item {
    background: #202C39;
    color: #E8D6CB;
    padding: 10px;
    border-bottom: 1px, #383F51 dotted;
  }

  .is-learning {
    text-decoration: line-through;
  }

  .mark-learning {
    background: #713e5a;
    color: #383F51;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>