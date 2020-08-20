<template>
  <div class="cart container">
    <p v-if="cartItems.length < 1" class="cart__info">
      Cart is empty, go back shopping
    </p>
    <ul v-if="cartItems.length > 0" class="cart__items">
      <li v-for="item in cartItems" :key="item.id" class="cart__item">
        <img :src="makeImagePath(item)" alt="" class="cart__itemImage" />
        <div class="cart__itemContent">
          <div class="cart__itemContentTop">
            <p class="cart__itemName">{{ item.name }}</p>
            <button
              class="cart__itemDeleteIcon"
              @click="removeFromCart(item.id)"
            >
              <unicon
                name="trash-alt"
                fill="#EF8216"
                width="32"
                height="32"
                class="cart__itemIcon"
              />
            </button>
          </div>
          <div class="cart__itemContentBottom">
            <select name="quantity" id="">
              <option
                v-for="(option, index) in item.quantity"
                :key="index"
                value="option"
                >{{ option }}</option
              >
            </select>
            <div class="cart__itemPrice">{{ `$${item.price}` }}</div>
          </div>
        </div>
      </li>
    </ul>
    <div v-if="cartItems.length > 0" class="cart__total">
      <div class="cart__totalInner">
        <div class="cart__totalTitle">Cart Summary</div>
      </div>
    </div>
  </div>
</template>
<script>
import { imagePath } from "@/mixins/imagePath.js";

export default {
  name: "Cart",
  mixins: [imagePath],
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    }
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch("removeFromCart", itemId);
    }
  },
};
</script>
<style lang="scss">
.cart {
  $root: &;
  display: flex;
  padding-top: 16rem;

  &__items {
    width: 60%;
  }

  &__total {
    border: 1px solid $cGrey01;
    width: 40%;
  }

  &__item {
    display: flex;
    max-height: 31.2rem;
  }

  &__itemImage {
    width: 30%;
  }

  &__itemContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    padding: 2.2rem 5rem 2.2rem 7rem;
  }

  &__itemContentTop,
  &__itemContentBottom {
    display: flex;
    justify-content: space-between;
  }

  &__itemName {
    font-size: 3.5rem;
    font-weight: 700;
  }

  &__itemIcon {
    font-size: 2rem;
    line-height: 3.5rem;
  }

  &__itemPrice {
    color: $cOrange;
    font-size: 4.5rem;
    line-height: 6rem;
    font-weight: 700;
  }

  &__info {
    font-size: 4rem;
    line-height: 4.5rem;
    color: $cBlack;
    padding: 2rem 4rem;
    background-color: $cWhite;
  }
}
</style>
