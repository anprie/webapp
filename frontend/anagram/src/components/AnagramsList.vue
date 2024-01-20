<template>
  <p v-if="anagrams.some(item => item.includes('-'))">
    To rearrange the syllables of an anagram, click on it!
  </p>
  <p v-else>
    Your anagrams are
  </p>
  <div
    class="container"
    v-for="anagram in anagrams"
    v-bind:key="anagram"
  >
    <a
      @click='selectAnagram(anagram)'
      style="text-decoration:none"
      onmouseover="style='text-decoration:underline'"
      onmouseout="style='text-decoration:none'"
    >
      {{ anagram }}
    </a>
  </div>
</template>


<script>
export default {
  name: "AnagramsList",
  props: ["anagrams"],
  data() {
    return {
      response: [],
    };
  },
  methods: {
    selectAnagram(anagram) {
      this.$emit("select-anagram", anagram);
    },
  },
};
</script>
