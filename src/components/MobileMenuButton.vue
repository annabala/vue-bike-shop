<template>
  <div class="mobileMenuButton" @click="onClick">
    <div :class="['mobileMenuButton__inner', { 'is-active': isActive }]">
      <span class="mobileMenuButton__line"></span>
      <span class="mobileMenuButton__line"></span>
      <span class="mobileMenuButton__line"></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "MobileMenuButton",
  data() {
    return {
      isActive: false
    };
  },
  watch: {
    $route() {
      this.isActive = false;
    },
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
      this.isActive = !this.isActive;
    }
  }
};
</script>
<style lang="scss">
.mobileMenuButton {
  $root: &;

  &__inner {
    position: relative;
    transition: all 0.3s ease-in-out;

    &::before {
      content: "";
      position: absolute;
      box-sizing: border-box;
      width: 50px;
      height: 50px;
      border: 4px solid transparent;
      top: calc(50% - 25px);
      left: calc(50% - 25px);
      border-radius: 100%;
      transition: all 0.3s ease-in-out;
    }

    &.is-active {
      transform: rotate(45deg);

      &::before {
        border: 4px solid #ecf0f1;
      }

      & #{$root}__line {
        width: 30px;

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(1) {
          transform: translateY(13px);
        }

        &:nth-child(3) {
          transform: translateY(-11px) rotate(90deg);
        }
      }
    }
  }

  &__line {
    width: 3rem;
    height: 4px;
    background-color: $cWhite;
    display: block;
    margin: 8px auto;
    transition: all 0.3s ease-in-out;
  }
}
</style>
