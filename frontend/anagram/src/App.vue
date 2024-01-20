<template>

  <head>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    >
  </head>
  <h1>Anagram</h1>

  <h5 class="card-title">Welcome! This is a anagram solver. Give it a word and pick a language, and it will return a list of anagrams that are pronounceable in the language you chose.</h5>

  <submit-word
    v-if="showForm"
    ref='SubmitWord'
    @show-anagrams='toggleResults'
  >
  </submit-word>

  <anagrams-list
    ref='AnagramsList'
    v-if="this.showResults && this.anagrams.length && this.anagrams != '0'"
    :anagrams='this.anagrams'
    @select-anagram='toggleRearrange'
  >
  </anagrams-list>
  <p v-else>
    There seems to be no anagram of the word you entered that corresponds with the distribution of letters in the language you chose.
  </p>

  <rearrange-syllables
    ref='RearrangeSyllables'
    v-if="showRearrange && this.anagram != '0'"
    :anagram='this.anagram'
  >
  </rearrange-syllables>
</template>

<script>
import SubmitWord from "./components/SubmitWord.vue";
import AnagramsList from "./components/AnagramsList.vue";
import RearrangeSyllables from "./components/RearrangeSyllables.vue";

export default {
  name: "App",
  components: {
    SubmitWord,
    AnagramsList,
    RearrangeSyllables,
  },
  data() {
    return {
      showResults: 0,
      showRearrange: 0,
      showForm: 1,
      anagrams: [],
      anagram: "",
    };
  },
  methods: {
    toggleResults(anagrams) {
      this.anagrams = anagrams;
      (this.showForm = 0), (this.showResults = 1);
      this.showRearrange = 0;
    },
    toggleRearrange(anagram) {
      this.anagram = anagram;
      this.showForm = 0;
      this.showResults = 0;
      this.showRearrange = 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  height: 50px;
}

h1 {
  color: deeppink;
  background-color: mistyrose;
}

html {
  background-color: mistyrose;
}

#anagram {
  width: 100%;
  text-align: center;
  table-layout: fixed;
  vertical-align: middle;
  height: 50px;
}

#formtable {
  vertical-align: middle;
}

.container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
</style>
