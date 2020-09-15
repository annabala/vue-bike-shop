<template>
  <div class="vButton">
    <router-link
      v-if="href"
      :to="href"
      :class="[
        'vButton__button vButton__button--link',
        `vButton__button--${theme}`,
        `vButton__button--${size}`
      ]"
    >
      <span>{{ text }}</span>
    </router-link>
    <button
      v-else
      :type="type"
      :class="[
        'vButton__button',
        `vButton__button--${theme}`,
        `vButton__button--${size}`
      ]"
      @click="onClick"
    >
      <span>{{ text }}</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "VButton",
  props: {
    text: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "button"
    },
    href: {
      type: String,
      default: ""
    },
    theme: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "medium"
    }
  },
  methods: {
    onClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="scss">
.vButton {
  $root: &;

  &__button {
    font-weight: 600;

    &--orange {
      background-color: $cOrange;
      border: 2px solid transparent;
      color: $cWhite;
      transition: color $tr, background-color $tr, border $tr;

      &:hover {
        background-color: $cWhite;
        color: $cOrange;
        border: 2px solid $cOrange;
      }
    }

    &--orangeHome {
      background-color: $cOrange;
      color: $cWhite;
      position: relative;

      & span {
        z-index: 10;
      }

      &::before {
        content: "";
        background-color: $cWhite;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: transform $tr, opacity $tr;
        opacity: 0;
        z-index: -1;
      }

      &:hover {
        &::before {
          opacity: 1;
          transform: translate(10px, -10px);
        }
      }
    }

    &--grey {
      background-color: $cGrey01;
      color: $cWhite;
    }

    &--orangeBorder {
      background-color: transparent;
      border: 2px solid $cOrange;
      color: $cOrange;
      transition: border $tr, color $tr;

      &:hover {
        color: $cDarkBlue;
        border: 2px solid $cDarkBlue;
      }
    }

    &--whiteBorder {
      background-color: transparent;
      border: 2px solid $cWhite;
      color: $cWhite;
      transition: border $tr;
      position: relative;

      &::before {
        content: "";
        width: 100%;
        height: 100%;
        border: 2px solid $cWhite;
        position: absolute;
        transition: transform $tr, opacity $tr;
        opacity: 0;
      }

      &:hover {
        border: 2px solid $cOrange;

        &::before {
          opacity: 1;
          transform: translate(10px, -10px);
        }
      }
    }

    &--large {
      width: 31.1rem;
      height: 8rem;
      font-size: 2.5rem;
      line-height: 3.3rem;
    }

    &--medium {
      width: 30.4rem;
      height: 7.5rem;
      font-size: 3rem;
      line-height: 4rem;
    }

    &--small {
      width: 15.3rem;
      height: 4.8rem;
      font-size: 2.5rem;
      line-height: 3.3rem;
    }

    &--xsmall {
      width: 13.8rem;
      height: 5.6rem;
      font-size: 2.7rem;
      line-height: 3.6rem;
    }

    &--link {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
