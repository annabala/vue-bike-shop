<template>
  <div class="navbar">
    <img src="./../assets/images/OldGold.png" alt="oldgold" />
    <div class="navbar__items">
      <router-link to="/" class="navbar__item">Home</router-link>
      <router-link to="/cart" class="navbar__item navbar__item--noBorder"
        ><unicon
          name="shopping-cart"
          fill="white"
          width="32"
          height="32"
          class="navbar__icon"
      /></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Navbar"
};
</script>
<style lang="scss">
.navbar {
  $root: &;
  display: flex;
  justify-content: space-between;
  padding: 3rem 14rem 0 6.4rem;
  position: absolute;
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
    padding: 0.4rem ;
    transition: color $tr, border-color $tr;

    &--noBorder {
      border-bottom: 0;
    }

    &:hover {
      color: $cOrange;

      & svg {
        fill: $cOrange;
      }
    }

    &.router-link-exact-active {
      color: $cOrange;
      border-color: $cOrange;

      & svg {
        fill: $cOrange;
      }
    }
  }

  &__icon {
    & svg {
      transition: fill $tr;
    }
  }
}
</style>
