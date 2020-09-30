<template>
  <div class="footer">
    <router-link to="/"
      ><img
        class="footer__logo"
        src="./../assets/images/OldGoldDark.png"
        alt="oldgold"
    /></router-link>
    <div class="footer__items">
      <router-link to="/" class="footer__item"><span>Home</span></router-link>
      <router-link to="/bikes" class="footer__item"
        ><span>Bikes</span></router-link
      >
      <router-link to="/about" class="footer__item"
        ><span>About</span></router-link
      >
      <div class="footer__item footer__item--borderLeft">
        <p class="footer__itemLabel">Contact us:</p>
        <a class="footer__itemItem" href="mailto:bikeshop@gmail.com"
          >bikeshop@gmail.com</a
        >
        <a class="footer__itemItem" href="tel:+48556997234">+48 556 997 234</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss">
.footer {
  $root: &;
  background-color: $cOrange;
  display: flex;
  justify-content: space-between;
  padding: 2rem 14rem 2rem 6.4rem;

  @include rwd("large-tablet") {
    padding: 2rem;
  }

  @include rwd("tablet") {
    flex-wrap: wrap;
  }

  &__logo {
    max-width: 80%;

    @include rwd("large-phone") {
      max-width: 12rem;
    }
  }

  &__items {
    display: flex;
    align-items: flex-start;

    @include rwd("tablet") {
      justify-content: space-between;
      margin-top: 1rem;
    }

    @include rwd("large-phone") {
      flex-direction: column;
      width: 100%;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    color: $cWhite;
    font-size: 2rem;
    line-height: 2.5rem;
    font-weight: 500;
    margin-right: 5rem;
    padding: 0.4rem;
    transition: border-color $tr;

    @include rwd("large-tablet") {
      margin-right: 2rem;
    }

    @include rwd("tablet") {
      justify-content: space-between;
      margin-right: 1rem;
    }

    @include rwd("large-phone") {
      padding: 0.6rem 0;
    }

    & span {
      transition: color $tr;
    }

    &:hover {
      & span {
        color: $cDarkBlue;
      }
    }

    &--borderLeft {
      padding-left: 2rem;
      border-left: 1px solid $cWhite;

      @include rwd("small-tablet") {
        padding-left: 1rem;
      }

      @include rwd("large-phone") {
        padding-left: 0;
        border-left: none;
      }
    }

    &--noBorder {
      border-bottom: 0;
    }
  }

  &__itemLabel {
    @include rwd("large-phone") {
      padding-bottom: 0.1rem;
      border-bottom: 1px solid $cWhite;
    }
  }

  &__itemItem {
    margin-top: 1rem;
  }

  &__icon {
    & svg {
      transition: fill $tr;
    }
  }
}
</style>
