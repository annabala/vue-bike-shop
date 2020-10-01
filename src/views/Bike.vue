<template>
  <div class="bike container">
    <div class="bike__top">
      <div class="bike__info">
        <VHeading :level="'1'" :text="product.name" class="bike__name" />
        <p class="bike__company">({{ product.company }})</p>
        <div class="bike__images">
          <img
            v-for="(image, index) in product.images"
            :key="index"
            :src="makeImagePath(product)"
            alt=""
            class="bike__image"
          />
        </div>
      </div>
      <div class="bike__actions">
        <div class="bike__details">
          <p class="bike__price">Price: {{ `$${product.price}` }}</p>
          <p v-if="product.quantity > 0" class="bike__detail">
            Left in stock: {{ product.quantity }}
          </p>
          <p v-else class="bike__detail">Out of stock</p>
        </div>
        <div class="bike__buttons">
          <VButton
            :text="'Ask about bike'"
            :theme="'orangeBorder'"
            :size="'small'"
            class="bike__button"
            @click="askAboutBike"
          />
          <VButton
            :text="'BUY'"
            :theme="'orange'"
            :size="'small'"
            :disabled="product.quantity === 0"
            class="bike__button"
            @click="addToCart"
          />
          <VButton
            v-if="product.quantity === 0"
            :text="'Inform when available'"
            :theme="'orangeText'"
            :size="'xxsmall'"
            class="bike__button bike__button--noPadding"
            @click="getClientDetails"
          />
        </div>
      </div>
    </div>
    <div class="bike__bottom">
      <VHeading
        :level="'2'"
        :text="'Description:'"
        class="bike__heading bike__heading--h2 bike__heading--bg"
      />
      <div class="bike__description" v-html="product.description" />
    </div>
  </div>
</template>
<script>
import { imagePath } from "@/mixins/imagePath.js";
import VButton from "@/components/VButton";
import VHeading from "@/components/VHeading";

export default {
  name: "Bike",
  components: {
    VButton,
    VHeading,
  },
  mixins: [imagePath],
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id),
    };
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", this.$route.params.id);
    },
    askAboutBike() {
      alert("form will show up");
    },
    getClientDetails() {
      alert("please leave your");
    },
  },
};
</script>
<style lang="scss">
.bike {
  $root: &;
  padding-top: 16rem;
  padding-bottom: 6rem;

  @include rwd("tablet") {
    padding-top: 14rem;
  }

  &__top {
    display: flex;

    @include rwd("tablet") {
      flex-direction: column;
    }
  }

  &__info {
    flex: 0 0 60%;

    @include rwd("tablet") {
      flex: 0 0 100%;
    }
  }

  &__actions {
    padding-left: 8rem;

    @include rwd("tablet") {
      padding-left: 0;
    }
  }

  &__name {
    font-size: 3.5rem;
    font-weight: 700;
  }

  &__company {
    font-size: 2.5rem;
    line-height: 3.3rem;
    font-weight: 600;
    margin-top: 1rem;
  }

  &__buttons {
    @include rwd("tablet") {
      display: flex;
    }

    @include rwd("large-phone") {
      flex-direction: column;
    }
  }

  &__button {
    margin-bottom: 2rem;

    @include rwd("tablet") {
      margin-right: 2rem;
    }

     @include rwd("large-phone") {
      margin-right: 0;
    }

    & button {
      width: 100%;
      padding: 0 1rem;

      @include rwd("tablet") {
        min-width: 120px;
      }
    }

    &--noPadding {
      & button {
        width: auto;
        padding: 0;
        text-decoration: underline;
      }
    }
  }

  &__images {
    display: flex;
    flex-wrap: wrap;
  }

  &__image {
    display: flex;
    width: 25%;

    &:first-of-type {
      width: 100%;
    }
  }

  &__price {
    color: $cOrange;
    font-weight: 700;
    font-size: 3rem;
    line-height: 4rem;
  }

  &__detail {
    color: $cGrey02;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 4rem;

    @include rwd("tablet") {
      margin-bottom: 2rem;
    }
  }

  &__description {
    color: $cBlack;
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 600;
    padding-left: 1rem;

    & p:not(:first-of-type) {
      margin-top: 1.5rem;
    }
  }

  &__heading {
    &--h2 {
      margin-bottom: 2rem;
    }

    &--bg {
      color: $cWhite;
      background-color: $cDarkBlue;
      padding: 1rem;
    }
  }
}
</style>
