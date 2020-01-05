<template lang="html">
  <div id="app">
    <h1 id="title">Events Practise</h1>
    <v-container class="vuetify-flexbox-container">
      <v-layout row wrap justify-space-around>
        <v-flex xs12 md6>
          <Languages v-bind:languages="languages" v-on:del-language="deleteLanguage" />
        </v-flex>
        <v-flex xs12 md6>
          <v-btn outline block class="placeholder">Placeholder</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-space-around>
        <v-flex xs12 md6>
          <v-btn outline block class="placeholder">Placeholder</v-btn>
        </v-flex>
        <v-flex xs12 md6>
          <v-btn outline block class="placeholder">Placeholder</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
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
        { id: 1, name: "Ruby", learning: false },
        { id: 2, name: "JavaScript", learning: false },
        { id: 3, name: "Java", learning: false },
        { id: 4, name: "Python", learning: false },
        { id: 5, name: "TypeScript", learning: false }
      ]
    };
  },
  methods: {
    deleteLanguage(id) {
      this.languages = this.languages.filter(language => language.id != id);
    }
  }
};
</script>

<style lang="css">
* {
  /* box-sizing: border-box; */
}

body {
  font-family: sans-serif;
  text-align: center;
  line-height: 1.5rem;
  padding: 20px;
}

#title {
  color: #713e5a;
}

#vuetify-flexbox-container {
}

.placeholder {
  margin: 10px;
  font-style: oblique;
}
</style>