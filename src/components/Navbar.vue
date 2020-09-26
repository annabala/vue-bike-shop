<template>
  <div :class="['navbar', { 'is-active': isMobile }]">
    <router-link to="/"
      ><img src="./../assets/images/OldGold.png" alt="oldgold"
    /></router-link>
    <MobileMenuButton class="navbar__mobileButton" @click="isOpen" />
    <div :class="['navbar__items', { 'is-active': isMobile }]">
      <router-link to="/" class="navbar__item"><span>Home</span></router-link>
      <router-link to="/bikes" class="navbar__item"
        ><span>Bikes</span></router-link
      >
      <router-link to="/about" class="navbar__item"
        ><span>About</span></router-link
      >
      <router-link
        to="/cart"
        class="navbar__item navbar__item--noBorder navbar__item--cart"
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
import MobileMenuButton from "@/components/MobileMenuButton";

export default {
  name: "Navbar",
  components: {
    CounterBadge,
    MobileMenuButton
  },
  computed: {
    cartLength() {
      return this.$store.state.cart.length;
    }
  },
  data() {
    return {
      isMobile: false
    };
  },
  methods: {
    isOpen() {
      this.isMobile = !this.isMobile;
    }
  }
};
</script>
<style lang="scss">
.navbar {
  $root: &;
  background-color: $cDarkBlue;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid transparent;
  padding: 2rem 14rem 2rem 6.4rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  @include rwd("large-tablet") {
    padding: 2rem;
    align-items: center;
    transition: border-bottom $tr;

    &.is-active {
      border-bottom: 2px solid $cGrey04;
    }
  }

  &__items {
    display: flex;
    align-items: center;

    &.is-active {
      display: flex;
      transform: translateX(0);
    }

    @include rwd("large-tablet") {
      flex-direction: column;
      position: absolute;
      top: 10.3rem;
      right: 0;
      background-color: $cDarkBlue;
      padding: 5rem 10rem;
      transform: translateX(100%);
      transition: transform $tr;
    }
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

    @include rwd("large-tablet") {
      margin-right: 0;
      margin-bottom: 3rem;

      &:last-of-type {
        margin-bottom: 0;
      }
    }

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

  &__mobileButton {
    display: none;
    margin-right: 1rem;
    // position: absolute;
    // top: 50%;
    // right: 0;
    // transform: translate(-50%, -50%);

    @include rwd("large-tablet") {
      display: block;
    }
  }
}
</style>
