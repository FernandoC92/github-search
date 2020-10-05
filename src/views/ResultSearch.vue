<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-12 d-flex flex-column align-items-center flex-md-row justify-content-between"
      >
        <AppName fontSize="42" class="col-12 col-md-4 p-0" />
        <InputSearch class="col-12 offset-0 offset-md-4 col-md-4 mt-4" />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <ProfileGit />
      </div>
    </div>
  </div>
</template>
<script>
import AppName from "../components/AppName";
import InputSearch from "../components/InputSearch";
import ProfileGit from "../components/ProfileGit";

export default {
  components: {
    AppName,
    InputSearch,
    ProfileGit,
  },
};
</script>

<style lang="scss" scoped>
</style>