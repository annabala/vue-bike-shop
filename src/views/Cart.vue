<template>
  <div class="cart container container--list">
    <p v-if="cartItems.length < 1" class="cart__info">
      Cart is empty,
      <router-link to="/bikes" class="cart__infoLink"
        >go back shopping</router-link
      >
    </p>
    <!-- <VHeading
      v-if="cartItems.length > 0"
      :level="'2'"
      :text="'Cart items:'"
      class="cart__heading cart__heading--h2"
    /> -->
    <cartList v-if="cartItems.length > 0" class="cart__items" />
    <cartTotal v-if="cartItems.length > 0" class="cart__total" />
  </div>
</template>
<script>
import CartList from "@/components/Cart/CartList";
import CartTotal from "@/components/Cart/CartTotal";
// import VHeading from "@/components/VHeading";

export default {
  name: "Cart",
  components: {
    CartList,
    CartTotal,
    // VHeading,
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartSubtotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch("removeFromCart", itemId);
    },
    itemQuantity(item) {
      return Array.from(Array(item).keys(), (_, i) => i + 1);
    },
  },
};
</script>
<style lang="scss">
.cart {
  $root: &;
  display: flex;
  align-items: flex-start;
  padding-top: 16rem;
  padding-bottom: 6rem;

  @include rwd("large-tablet") {
    flex-direction: column;
  }

  @include rwd("tablet") {
    padding-top: 12rem;
  }

  &__heading {
    margin-bottom: 2rem;
  }

  &__items {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex: 0 0 70%;
    max-width: 70%;

    @include rwd("large-tablet") {
      flex: 0 0 100%;
      width: 100%;
    }
  }

  &__total {
    border: 2px solid rgba($cGrey03, 0.26);
    flex: 0 0 53.6rem;
    max-width: 53.6rem;

    @include rwd("large-tablet") {
      flex: 100%;
    }
  }

  &__item {
    display: flex;
    max-height: 31.2rem;
    border: 2px solid rgba($cGrey03, 0.26);
    width: calc(100% - 1.6rem);
    margin-bottom: 1.6rem;
  }

  &__itemImage {
    width: 30%;
    object-fit: contain;
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
    align-items: center;
  }

  &__itemName {
    font-size: 3.5rem;
    font-weight: 700;
  }

  &__itemCompany {
    font-size: 3rem;
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

  &__itemSelect {
    width: 10rem;
  }

  &__info {
    font-size: 4rem;
    line-height: 4.5rem;
    color: $cBlack;
    padding: 2rem 4rem;
    background-color: $cWhite;
  }

  &__infoLink {
    color: $cOrange;
  }
}
</style>
