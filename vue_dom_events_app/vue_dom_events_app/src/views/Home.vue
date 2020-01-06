<template lang="html">
  <div id="app">
    <v-container class="vuetify-flexbox-container">
      <v-layout row wrap justify-space-around>
        <v-flex xs12 md6 class="box">
          <AddLanguage v-on:add-language="addLanguage" id="add-language" />
          <Languages v-bind:languages="languages" v-on:del-language="deleteLanguage" />
        </v-flex>
        <v-flex xs12 md6 class="box">
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
import Header from "../components/layout/Header.vue";
import Languages from "../components/Languages.vue";
import AddLanguage from "../components/AddLanguage.vue";

export default {
  name: "Home",
  components: {
    Header,
    Languages,
    AddLanguage
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
    },
    addLanguage(newLanguage) {
      this.languages = [...this.languages, newLanguage];
    }
  }
};
</script>

<style lang="css">
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
  line-height: 1.5rem;
  margin: 20px;
}

.btn {
  display: inline-block;
  background: #202C39;
  color: #E8D6CB;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #2E5266;
}

.box {
  background: #E8D6CB;
  margin: 2px;
}

#add-language {
  margin: 5px;
  border: 1px #202C39 solid;
}

.placeholder {
  margin: 10px;
  font-style: oblique;
}
</style>