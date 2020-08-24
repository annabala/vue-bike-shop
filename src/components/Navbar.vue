<template>
  <div class="navbar">
    <img src="./../assets/images/OldGold.png" alt="oldgold" />
    <div class="navbar__items">
      <router-link to="/" class="navbar__item"><span>Home</span></router-link>
      <router-link to="/bikes" class="navbar__item"><span>Bikes</span></router-link>
      <router-link to="/cart" class="navbar__item navbar__item--noBorder navbar__item--cart"
        ><unicon
          name="shopping-cart"
          fill="white"
          width="32"
          height="32"
          class="navbar__icon"
        />
        <CounterBadge :count="cartLength" class="navbar__badge" />
      </router-link>
    </div>
  </div>
</template>
<script>
import CounterBadge from "@/components/CounterBadge";

export default {
  name: "Navbar",
  components: {
    CounterBadge
  },
  computed: {
    cartLength() {
      return this.$store.state.cart.length;
    }
  }
};
</script>
<style lang="scss">
.navbar {
  $root: &;
  background-color: #00163a;
  display: flex;
  justify-content: space-between;
  padding: 3rem 14rem 3rem 6.4rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  &__items {
    display: flex;
    align-items: center;
  }

  &__item {
    color: $cWhite;
    font-size: 2.7rem;
    line-height: 3rem;
    font-weight: 500;
    border-bottom: 2px solid transparent;
    margin-right: 5rem;
    padding: 0.4rem;
    transition: border-color $tr;

    & span {
      transition: color $tr;
    }

    &:hover {
      & span {
        color: $cOrange;
      }

      & svg {
        fill: $cOrange;
      }
    }

    &.router-link-exact-active:not(#{$root}__item--cart) {
      color: $cOrange;
      border-color: $cOrange;

      & svg {
        fill: $cOrange;
      }
    }

    &--noBorder {
      border-bottom: 0;
    }

    &--cart {
      position: relative;
      z-index: 2;
    }
  }

  &__icon {
    & svg {
      transition: fill $tr;
    }
  }

  &__badge {
    position: absolute;
    top: -5px;
    right: -20px;
    z-index: 1;
  }
}
</style>
