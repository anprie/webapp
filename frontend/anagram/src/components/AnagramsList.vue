<template>
  <div>
    <div v-if="this.dummyList">
            <p>To rearrange the syllables of an anagram, click on it!</p>
      <ul
        v-for="anagram, index in this.dummyList"
        v-bind:key="index"
      >
        <li>
          <a @click='selectAnagram(index)'>
            {{ anagram }}
          </a>
        </li>
      </ul>
    </div>
    <p v-else>
      There seems to be no anagram of the word {word} that corresponds with the distribution of letters in {language}
    </p>
  </div>
</template>


<script>
export default {
  name: "AnagramsList",
  props: ["anagrams"],
  data() {
    return {
      dummyList: ["foo-bar", "o-fo-bar", "foo", "0"],
    };
  },
  methods: {
    selectAnagram(index) {
      this.$emit("selected-anagram", index);
    },
  },
};
</script>
