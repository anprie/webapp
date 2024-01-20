<template>
  <div>

    <form>
      <label for="word">
        Please enter a word!
      </label>
      <input
        type="text"
        class="form-control"
        id="word"
        aria-describedby="wordHelp"
        name="word"
        maxlength=20
        pattern="[a-zA-ZäÄöÖüÜ]{1,20}"
        required
      >
      <small
        id="wordHelp"
        class="form-text text-muted"
      >
        Only the letters A-Z and German umlauts are currently supported.
      </small>
      <br>
      <label for="language">
        Please choose a language!
      </label>
      <input
        type="text"
        class="form-control"
        id="language"
        aria-describedby="languageHelp"
        name="language"
        list="languages"
        placeholder="german"
        value="german"
        required
      >
      <datalist id="languages">
        <select>
          <option value="german">german</option>
        </select>
      </datalist>
      <small
        id="languageHelp"
        class="form-text text-muted"
      >
        More languages will be supported soon.
      </small>

      <button
        type="submit"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalExample"
        @click='showAnagrams'
      >
        Submit
      </button>
    </form>
  </div>
</template>


<script>
export default {
  name: "SubmitWord",
  emits: ["show-anagrams"],
  data() {
    return {
      dummyResponse: ["foo-bar", "o-fo-bar", "foo", "0"],
    };
  },
  methods: {
    showAnagrams() {
      this.$emit("show-anagrams", this.dummyResponse);
    },
  },
};
</script>
