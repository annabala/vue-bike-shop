<template>
  <div class="home">
    <Slider class="home__slider" />
  </div>
</template>

<script>
import Slider from "@/components/Home/Slider.vue";

export default {
  name: "Home",
  components: {
    Slider
  },
};
</script>
<style lang="scss">
.home {
  $root: &;
}
</style>
