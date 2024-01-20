<template>
  <div>
    <p v-if="! anagram.includes('-')">
      {{ anagram }}
    </p>
    <p
      v-else
      v-for='syll in splitIntoSyllables(anagram)'
      v-bind:key='syll'
    >
      <span> {{ syll }} </span>
    </p>
  </div>
</template>


<script>
export default {
  name: "AnagramsList",
  props: ["anagram"],
  data() {
    return {
      syllables: [],
    };
  },
  methods: {
    splitIntoSyllables(word) {
      this.syllables = word.split("-");
      return this.syllables;
    },
  },
};
</script>
