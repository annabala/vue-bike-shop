<template>
  <div class="cartList">
    <ul class="cartList__items">
      <li v-for="item in cartItems" :key="item.id" class="cartList__item">
        <img :src="makeImagePath(item)" alt="" class="cartList__itemImage" />
        <div class="cartList__itemContent">
          <div class="cartList__itemContentTop">
            <div class="cartList__itemName">
              {{ item.name }}
              <span class="cartList__itemCompany">({{ item.company }})</span>
            </div>
            <button
              class="cartList__itemDeleteIcon"
              @click="removeFromCart(item.id)"
            >
              <unicon
                name="trash-alt"
                fill="#EF8216"
                width="32"
                height="32"
                class="cartList__itemIcon"
              />
            </button>
          </div>
          <div class="cartList__itemContentBottom">
            <v-select
              name="quantity"
              :options="itemQuantity(item.quantity)"
              :searchable="false"
              :clearable="false"
              v-model="quantity"
              class="cartList__itemSelect"
            ></v-select>
            <div class="cartList__itemPrice">{{ `$${calcPrice}` }}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import vSelect from "vue-select";
import { imagePath } from "@/mixins/imagePath.js";
import "vue-select/dist/vue-select.css";

export default {
  name: "CartList",
  components: {
    vSelect
  },
  mixins: [imagePath],
  data() {
    return {
      quantity: "1"
    };
  },
  computed: {
    cartItems() {
      return this.$store.getters.cartItems;
    },
    calcPrice() {
      return this.cartItems.reduce(
        (quantity, item) => this.quantity * item.price,
        0
      );
    }
  },
  methods: {
    removeFromCart(itemId) {
      this.$store.dispatch("removeFromCart", itemId);
    },
    itemQuantity(item) {
      return Array.from(Array(item).keys(), (_, i) => i + 1);
    }
  }
};
</script>
<style lang="scss">
.cartList {
  $root: &;

  &__items {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  &__item {
    display: flex;
    max-height: 31.2rem;
    border: 2px solid rgba($cGrey03, 0.26);
    width: calc(100% - 1.6rem);
    margin-bottom: 1.6rem;
  }

  &__itemImage {
    width: 30%;
    object-fit: contain;
  }

  &__itemContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
    padding: 2.2rem 5rem 2.2rem 7rem;
  }

  &__itemContentTop,
  &__itemContentBottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__itemName {
    font-size: 3.5rem;
    font-weight: 700;
  }

  &__itemCompany {
    font-size: 3rem;
    font-weight: 700;
  }

  &__itemIcon {
    font-size: 2rem;
    line-height: 3.5rem;
  }

  &__itemPrice {
    color: $cOrange;
    font-size: 4.5rem;
    line-height: 6rem;
    font-weight: 700;
  }

  &__itemSelect {
    width: 10rem;
  }

  &__info {
    font-size: 4rem;
    line-height: 4.5rem;
    color: $cBlack;
    padding: 2rem 4rem;
    background-color: $cWhite;
  }

  &__infoLink {
    color: $cOrange;
  }
}
</style>
