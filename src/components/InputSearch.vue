<template>
  <div class="input-group d-flex justify-content-center col-12 mb-3 p-0">
    <input
      v-model="inputValue"
      type="text"
      class="form-control rounded-0 input-border p-0"
      aria-label="Recipient's username"
      aria-describedby="button-search"
    />
    <div class="input-group-append p-0">
      <router-link
        :to="{ name: 'result', params: { userName: inputValue } }"
        class=""
      >
        <button class="btn rounded-0 bg-dark btn-search" @click="changeSearch">
          <img src="../assets/icons/search.svg" alt="" />
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: this.$route.params.userName,
    };
  },
  methods: {
    changeSearch() {
      this.$emit("changeSearchValue", this.inputValue);
    },
  },
};
</script>

<style scoped >
.input-border {
  border: 2px solid #000 !important;
  height: 50px;
  max-width: 600px;
  width: 600px;
}

.btn-search {
  width: 100px;
  height: 50px;
  max-height: 50px;
}
</style>