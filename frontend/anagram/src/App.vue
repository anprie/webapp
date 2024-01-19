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
    ref='SubmitWord'
    @show-results='toggleResults'
  >
  </submit-word>

  <anagrams-list
    ref='AnagramsList'
    v-if='showResults'
    :anagrams='this.anagrams'
    @select-anagram='toggleRearrange'
  >
  </anagrams-list>

  <rearrange-syllables
    ref='RearrangeSyllables'
    v-if='showRearrange'
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
      showResults: 1,
      showRearrange: 1,
      anagrams: [],
      anagram: "",
    };
  },
  computed: {
    anagramsList() {
      return this.anagrams;
    },
    selectedAnagram() {
      return this.anagram;
    },
  },
  methods: {
    toggleResults(anagrams) {
      this.anagrams = anagrams;
      this.showResults = 1;
      this.showRearrange = 0;
    },
    toggleRearrange(anagram) {
      this.anagram = anagram;
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
</style>
