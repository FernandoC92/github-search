<template>
  <router-link class="link" to="/">
  <h1
    class="app-name justify-content-center text-center text-md-left"
    :style="{ fontSize: fontSize + 'px' }"
  >
    <strong class="roboto-bold">Github</strong>
    <span class="font-italic"> Search</span>
  </h1>
  </router-link>
</template>

<script>
export default {
  props: {
    fontSize: String,
  },
};
</script>

<style lang="scss" scoped>
.app-name {
  color: #000;
  font-weight: 300;
}
.roboto-bold {
  font-family: "Roboto Mono", monospace;
  font-weight: 700;
}
.link:hover {
  cursor: pointer;
}

@media only screen and (max-width: 700px) {
 .app-name {
   font-size: 52px !important;
  }
}
</style>