<template>
  <div class="cart container container--list">
    <p v-if="cartItems.length < 1" class="cart__info">
      Cart is empty,
      <router-link to="/bikes" class="cart__infoLink"
        >go back shopping</router-link
      >
    </p>
    <cartList v-if="cartItems.length > 0" class="cart__items" />
    <cartTotal v-if="cartItems.length > 0" class="cart__total" />
  </div>
</template>
<script>
import CartList from "@/components/Cart/CartList";
import CartTotal from "@/components/Cart/CartTotal";

export default {
  name: "Cart",
  components: {
    CartList,
    CartTotal,
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

  &__items {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex: 70%;
  }

  &__total {
    border: 2px solid rgba($cGrey03, 0.26);
    flex: 53.6rem;
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

  &__totalValue {
    font-size: 2.5rem;
    line-height: 3.3rem;
    font-weight: 500;
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
