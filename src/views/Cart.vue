<template>
  <div class="cart">
    <p class="cart__info">Cart is empty, go back shopping</p>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
.cart {
  $root: &;
  padding-top: 10rem;

  &__info {
    font-size: 4rem;
    line-height: 4.5rem;
    color: $cBlack;
    padding: 2rem 4rem;
    background-color: $cWhite;
  }
}
</style>
