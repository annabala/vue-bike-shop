<template>
  <div class="bikes container container--list">
    <ul class="bikes__items">
      <li v-for="product in products" :key="product.id" class="bikes__item">
        <router-link :to="{ name: 'product', params: { id: product.id } }">
          <img
            :src="makeImagePath(product)"
            :alt="product.name"
            class="bikes__itemImage"
          />
          <div v-if="product.promo.value" class="bikes__itemPromo">
            {{ `-${product.promo.value}%` }}
          </div>
          <div class="bikes__itemInfo">
            <div class="bikes__itemName">
              <h2>{{ product.name }}</h2>
              <p>{{ product.details.additional }}</p>
            </div>
          </div>
        </router-link>
        <div class="bikes__itemAction">
          <div v-if="product.quantity !== 0" class="bikes__itemPrice">
            <span class="bikes__itemPriceRegular">{{
              `$${product.price}`
            }}</span>
            <span v-if="product.promo.price" class="bikes__itemPricePromo">{{
              `$${product.promo.price}`
            }}</span>
          </div>
          <div v-else class="bikes__itemInfoSoldOut">SOLD OUT</div>
          <VButton
            v-if="product.quantity > 0"
            :text="'BUY'"
            :theme="'orange'"
            :size="'small'"
            class="bikes__itemActionButton"
            @click="addToCart(product.id)"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { imagePath } from "@/mixins/imagePath.js";
import VButton from "@/components/VButton";

export default {
  name: "bikes",
  components: {
    VButton
  },
  mixins: [imagePath],
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    imagePath(product) {
      return require(`../assets/images/products/${product.images[0]}`);
    },
    addToCart(productId) {
      console.log('click');
      this.$store.dispatch("addToCart", productId);
    }
  }
};
</script>
<style lang="scss">
.bikes {
  $root: &;
  padding-top: 16rem;

  &__info {
    font-size: 4rem;
    line-height: 4.5rem;
    color: $cBlack;
    padding: 2rem 4rem;
    background-color: $cWhite;
  }

  &__items {
    background-color: $cWhite;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    // margin-left: -1rem;
    // margin-right: -1rem;
  }

  &__item {
    flex: 0 0 33.33%;
    max-width: 33.33%;
    margin-bottom: 1rem;
    border: 1px solid $cGrey01;
    padding: 1rem;
  }

  &__itemName {
    & h2 {
      font-size: 2.5rem;
      line-height: 3.3rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    & p {
      color: $cGrey02;
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 600;
    }
  }

  &__itemImage {
    display: inline-block;
    max-width: 100%;
    height: auto;
  }

  &__itemAction {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  &__itemPriceRegular {
    color: $cOrange;
    font-weight: 700;
    font-size: 3rem;
    line-height: 4rem;
  }

  &__itemInfoSoldOut {
    color: $cGrey01;
    font-weight: 700;
    font-size: 3rem;
    line-height: 4rem;
  }
}
</style>
