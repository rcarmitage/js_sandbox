<template>
  <div class="language-item" v-bind:class="{'is-learning':language.learning}">
    <p>
        <input type="checkbox" v-on:change="markLearning">
        {{ language.name }}
        <button @click="$emit('del-language', language.id)" class="del">x</button>
        </p>
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
    text-align: left;
    padding: 0.6rem;
    border-bottom: 1px #999 dotted;
  }

  .is-learning {
    text-decoration: underline overline;
  }

  .del {
    background: #713e5a;
    color: #202C39;
    font-weight: bold;
    border: none;
    padding: 2px 8px;
    border-radius: 20%;
    cursor: pointer;
    float: right;
  }
</style>