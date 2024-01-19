<template>
  <div>
    <div v-if="anagram !='0'">
      {{ this.dummyAnagram }}
    </div>
    <p v-else>
      There seems to be no anagram of the word {word} that corresponds with the distribution of letters in {language}
    </p>
  </div>
</template>


<script>
export default {
  name: "AnagramsList",
  props: ["anagram"],
  data() {
    return {
      dummyAnagram: "foo-bar-baz",
    };
  },
  methods: {},
};
</script>
