<template>
  <div class="bikes container container--list">
    <ul class="bikes__items">
      <li v-for="product in products" :key="product.id" class="bikes__item">
        <div class="bikes__itemInner">
          <router-link :to="{ name: 'product', params: { id: product.id } }">
            <img
              :src="makeImagePath(product)"
              :alt="product.name"
              class="bikes__itemImage"
            />
            <div class="bikes__itemTags">
              <div v-if="product.promo.value" class="bikes__itemPromo">
                {{ `-${product.promo.value}%` }}
              </div>
              <div
                v-if="product.label"
                class="bikes__itemPromo bikes__itemPromo--label"
              >
                {{ product.label | uppercase }}
              </div>
            </div>

            <div class="bikes__itemInfo">
              <div class="bikes__itemName">
                <h2>{{ product.name }} ({{ product.company }})</h2>
                <p>{{ product.details.additional }}</p>
                <p class="bikes__itemName bikes__itemName--more">more...</p>
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
    VButton,
  },
  mixins: [imagePath],
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    imagePath(product) {
      return require(`../assets/images/products/${product.images[0]}`);
    },
    addToCart(productId) {
      this.$store.dispatch("addToCart", productId);
    },
  },
};
</script>
<style lang="scss">
.bikes {
  $root: &;
  padding-top: 16rem;
  padding-bottom: 6rem;

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
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-left: -0.8rem;
    margin-right: -0.8rem;
  }

  &__item {
    flex: 0 0 25%;
    max-width: 25%;
    padding: 0.8rem;

    &:hover {
      #{$root}__itemImage {
        transform: scale(0.9);
      }
    }
  }

  &__itemInner {
    padding: 1.4rem 1.4rem 1.4rem 2rem;
    position: relative;
    border: 1px solid $cBlack;
    height: 100%;
    width: 100%;
    display: inline-block;
    overflow: hidden;
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
    min-height: 398px;
    height: auto;
    object-fit: contain;
    transition: transform $tr;
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

  &__itemPricePromo {
    color: $cGrey02;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
    margin-left: 1.25rem;
    position: relative;

    &::after {
      content: "";
      width: 4rem;
      height: 2px;
      background-color: $cGrey02;
      transform: translate(-50%, -50%) rotate(-20deg);
      position: absolute;
      top: 50%;
      left: 50%;
    }
  }

  &__itemInfoSoldOut {
    color: $cGrey01;
    font-weight: 700;
    font-size: 3rem;
    line-height: 4rem;
  }

  &__itemTags {
    display: flex;
    position: absolute;
    top: 1.7rem;
    right: 1.7rem;
  }

  &__itemPromo {
    color: $cWhite;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: $cOrange;
    height: 8.8rem;
    width: 8.8rem;

    &:first-of-type {
      margin-right: 1rem;
    }

    &--label {
      background-color: $cRed;
    }
  }
}
</style>
