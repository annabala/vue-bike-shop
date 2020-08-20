<template>
  <div class="bike container container--list">
    <h1 class="bike__name">{{ product.name }}</h1>
    <img :src="makeImagePath(product)" alt="" />
    <VButton
      :text="'BUY'"
      :theme="'orange'"
      :size="'small'"
      class="bike__itemActionButton"
      @click="addToCart"
    />
    <p>Left in stock: {{ product.quantity }}</p>
  </div>
</template>
<script>
import { imagePath } from "@/mixins/imagePath.js";
import VButton from "@/components/VButton";

export default {
  name: "Bike",
  components: {
    VButton
  },
  mixins: [imagePath],
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id)
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", this.$route.params.id);
    }
  }
};
</script>
<style lang="scss">
.bike {
  $root: &;
  padding-top: 16rem;

  &__name {
    font-size: 3.5rem;
    font-weight: 700;
  }
}
</style>
