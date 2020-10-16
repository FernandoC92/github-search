<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-12 d-flex flex-column align-items-center flex-md-row justify-content-between"
      >
        <AppName fontSize="42" class="col-12 col-md-4 p-0" />
        <InputSearch @changeSearchValue="updateSearch($event)" class="col-12 offset-0 offset-md-4 col-md-4 mt-4" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ProfileGit ref="ProfileGit" />
      </div>
    </div>
  </div>
</template>
<script>
import AppName from "../components/AppName";
import InputSearch from "../components/InputSearch";
import ProfileGit from "../components/ProfileGit";

export default {
  data() {
    return {
      inputSearchValue: '',
    }
  },
  components: {
    AppName,
    InputSearch,
    ProfileGit,
  },
  methods: {
    updateSearch(eventParam) {
      this.inputSearchValue = eventParam
      console.log('updateSearch() => ', this.inputSearchValue)
       this.$refs.ProfileGit.getUser(this.inputSearchValue)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>