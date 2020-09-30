<template>
  <div class="cartTotal">
    <div class="cartTotal__totalInner">
      <div class="cartTotal__totalTitle">Cart Summary</div>
      <div class="cartTotal__totalContent">
        <div class="cartTotal__totalContentItem cartTotal__totalSubtotal">
          <span class="cartTotal__totalLabel">Subtotal</span>
          <span class="cartTotal__totalValue">{{ cartSubtotal }}</span>
        </div>
        <div class="cartTotal__totalContentItem cartTotal__totalGift">
          <span class="cartTotal__totalLabel">Gift Wrapping</span>
        </div>
        <div class="cartTotal__totalContentItem cartTotal__totalShipping">
          <span class="cartTotal__totalLabel">Shipping</span>
        </div>
        <div class="cartTotal__totalContentItem cartTotal__totalCou">
          <span class="cartTotal__totalLabel">Coupon</span>
        </div>
        <div class="cartTotal__totalContentItem cartTotal__totalGrandTotal">
          <span class="cartTotal__totalLabel cartTotal__totalLabel--big"
            >Grand Total</span
          >
          <span class="cartTotal__totalValue">$2450</span>
        </div>
      </div>
      <div class="cartTotal__totalButtons">
        <VButton
          :href="'/bikes'"
          :text="'Continue Shop'"
          :theme="'orangeBorder'"
          :size="'small'"
          class="cartTotal__totalButton"
        />
        <VButton
          :text="'Checkout'"
          :theme="'orange'"
          :size="'small'"
          class="cartTotal__totalButton"
        />
      </div>
    </div>
  </div>
</template>
<script>
import VButton from "@/components/VButton";

export default {
  name: "cartTotal",
  components: {
    VButton,
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    cartSubtotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
  },
  methods: {},
};
</script>
<style lang="scss">
.cartTotal {
  $root: &;

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

    @include rwd("large-tablet") {
      flex-direction: column;
    }
  }

  &__totalButton {
    & button,
    & a {
      width: 22rem;
    }
  }
}
</style>
