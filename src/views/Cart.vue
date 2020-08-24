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
        <div class="cart__totalContent">
          <div class="cart__totalContentItem cart__totalSubtotal">
            <span class="cart__totalLabel">Subtotal</span>
            <span>{{ cartSubtotal }}</span>
          </div>
          <div class="cart__totalContentItem cart__totalGift">
            <span class="cart__totalLabel">Gift Wrapping</span>
          </div>
          <div class="cart__totalContentItem cart__totalShipping">
            <span class="cart__totalLabel">Shipping</span>
          </div>
          <div class="cart__totalContentItem cart__totalCou">
            <span class="cart__totalLabel">Coupon</span>
          </div>
          <div class="cart__totalContentItem cart__totalGrandTotal">
            <span class="cart__totalLabel cart__totalLabel--big"
              >Grand Total</span
            >
            <span class="cart__totalValue">$2450</span>
          </div>
        </div>
        <div class="cart__totalButtons">
          <VButton
            :href="'/bikes'"
            :text="'Continue Shop'"
            :theme="'orangeBorder'"
            :size="'small'"
            class="cart__totalButton"
          />
          <VButton
            :text="'Checkout'"
            :theme="'orange'"
            :size="'small'"
            class="cart__totalButton"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { imagePath } from "@/mixins/imagePath.js";
import VButton from "@/components/VButton";

export default {
  name: "Cart",
  components: {
    VButton
  },
  mixins: [imagePath],
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartSubtotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    }
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch("removeFromCart", itemId);
    }
  }
};
</script>
<style lang="scss">
.cart {
  $root: &;
  display: flex;
  padding-top: 16rem;

  &__items {
    flex: 60%;
  }

  &__total {
    border: 1px solid $cGrey01;
    flex: 53.6rem;
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

  &__totalTitle {
    background-color: $cOrange;
    padding: 2rem 4rem;
    color: $cWhite;
    font-size: 3.5rem;
    line-height: 4.7rem;
    font-weight: 700;
  }

  &__totalContent {
    padding: 1.2rem 4rem;
  }

  &__totalContentItem {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__totalLabel {
    display: inline-block;
    font-size: 2.5rem;
    line-height: 3.3rem;
    font-weight: 500;
    margin: 1.5rem 0 0 0;

    &--big {
      font-size: 3.5rem;
      line-height: 4.7rem;
      font-weight: 700;
    }
  }

  &__totalGrandTotal {
    font-size: 3.5rem;
    line-height: 4.7rem;
    font-weight: 700;
    margin-top: 10rem;
    margin-bottom: 4rem;
  }

  &__totalButtons {
    display: flex;
    justify-content: space-between;
    padding: 1.2rem;
  }

  &__totalButton {
    & button,
    & a {
      width: 22rem;
    }
  }
}
</style>
