<template>
  <div
    class="d-flex flex-column align-items-center vh-100 justify-content-center"
  >
    <AppName fontSize="64" />
    <InputSearch />
  </div>
</template>
<script>
import InputSearch from "../components/InputSearch";
import AppName from "../components/AppName";
export default {
  components: {
    AppName,
    InputSearch,
  },
};
</script>

<style>
.vh-100 {
  height: 100vh;
}
</style>