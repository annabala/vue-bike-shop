<template>
  <div class="bike container">
    <div class="bike__top">
      <div class="bike__info">
        <VHeading :level="'1'" :text="product.name" class="bike__name" />
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
          <p class="bike__detail">Left in stock: {{ product.quantity }}</p>
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
            class="bike__button"
            @click="addToCart"
          />
        </div>
      </div>
    </div>
    <div class="bike__bottom">
      <VHeading
        :level="'2'"
        :text="'Description:'"
        class="bike__heading bike__heading--h2"
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
  },
};
</script>
<style lang="scss">
.bike {
  $root: &;
  padding-top: 16rem;

  &__top {
    display: flex;
  }

  &__info {
    flex: 0 0 60%;
  }

  &__actions {
    padding-left: 8rem;
  }

  &__name {
    font-size: 3.5rem;
    font-weight: 700;
  }

  &__button {
    &:first-of-type {
      margin-bottom: 2rem;
    }
    & button {
      width: 100%;
      padding: 0 1rem;
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
  }

  &__description {
    color: $cBlack;
    font-size: 2rem;
    line-height: 3rem;
    font-weight: 600;
    padding-bottom: 3rem;

    & p:not(:first-of-type) {
      margin-top: 1.5rem;
    }
  }

  &__heading {
    &--h2 {
      margin-bottom: 2rem;
    }
  }
}
</style>
