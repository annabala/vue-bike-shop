import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: [
      {
        name: "Superbike One",
        id: 53362,
        price: 1000,
        promo: {
          value: "10",
          price: "900"
        },
        label: "hot",
        color: "white",
        size: "18",
        gender: "men",
        quantity: 10,
        dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "city",
        details: {
          material: "carbon",
          additional: "It is great to take a ride in the city"
        },
        images: ["bike1.png", "bike2.jpg"]
      },
      {
        name: "Beautiful red bike",
        id: 53363,
        price: 800,
        promo: {
          value: "",
          price: ""
        },
        label: "",
        color: "red",
        size: "17",
        gender: "woman",
        quantity: 0,
        dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "city",
        details: {
          material: "carbon",
          additional: "It is great to take a ride in the city"
        },
        images: ["bike1.png", "bike3.jpg"]
      },
      {
        name: "Superfast bike",
        id: 53364,
        price: 1340,
        promo: {
          value: "",
          price: ""
        },
        label: "hot",
        color: "blue",
        size: "20",
        gender: "woman",
        quantity: 2,
        dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "outdoor",
        details: {
          material: "carbon",
          additional: "Go fast!!"
        },
        images: ["bike1.png", "bike2.jpg"]
      },
      {
        name: "Beautiful red bike",
        id: 533636,
        price: 800,
        promo: {
          value: "",
          price: ""
        },
        label: "",
        color: "red",
        size: "17",
        gender: "woman",
        quantity: 0,
        dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "city",
        details: {
          material: "carbon",
          additional: "It is great to take a ride in the city"
        },
        images: ["bike1.png", "bike3.jpg"]
      },
      {
        name: "Superfast bike",
        id: 533641,
        price: 1340,
        promo: {
          value: "",
          price: ""
        },
        label: "hot",
        color: "blue",
        size: "20",
        gender: "woman",
        quantity: 2,
        dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "outdoor",
        details: {
          material: "carbon",
          additional: "Go fast!!"
        },
        images: ["bike1.png", "bike2.jpg"]
      },
      {
        name: "Beautiful red bike",
        id: 533643,
        price: 800,
        promo: {
          value: "",
          price: ""
        },
        label: "",
        color: "red",
        size: "17",
        gender: "woman",
        quantity: 0,
        dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "city",
        details: {
          material: "carbon",
          additional: "It is great to take a ride in the city"
        },
        images: ["bike1.png", "bike3.jpg"]
      },
      {
        name: "Superfast bike",
        id: 533564,
        price: 1340,
        promo: {
          value: "",
          price: ""
        },
        label: "hot",
        color: "blue",
        size: "20",
        gender: "woman",
        quantity: 2,
        dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "outdoor",
        details: {
          material: "carbon",
          additional: "Go fast!!"
        },
        images: ["bike1.png", "bike2.jpg"]
      },

      {
        name: "Child bike",
        id: 53365,
        price: 600,
        promo: {
          value: "10",
          price: "500"
        },
        label: "",
        color: "green",
        size: "12",
        gender: "children",
        quantity: 6,
        dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "city",
        details: {
          material: "carbon",
          additional: "Kids go with you"
        },
        images: ["bike1.png", "bike2.jpg"]
      }
    ]
  },
  mutations: {
    addToCart(state, payload) {
      state.cart.push(Number(payload));
    },
    decrementProductInventory(state, payload) {
      let product = state.products.find(
        product => product.id === Number(payload)
      );
      product.quantity--;
    },
    removeFromCart(state, payload) {
      let indexToDelete = state.cart.indexOf(Number(payload));
      state.cart.splice(indexToDelete, 1);
    },
    incrementProductInventory(state, payload) {
      let product = state.products.find(
        product => product.id === Number(payload)
      );
      product.quantity--;
    }
  },
  actions: {
    addToCart({ commit }, payload) {
      commit("addToCart", payload);
      commit("decrementProductInventory", payload);
    },
    removeFromCart({ commit }, payload) {
      commit("removeFromCart", payload);
      commit("incrementProductInventory", payload);
    }
  },
  getters: {
    product: state => id => {
      return state.products.filter(p => p.id === Number(id))[0];
    },
    cartItems: state => {
      return state.cart.map(itemId =>
        state.products.find(product => product.id === itemId)
      );
    }
  },
  modules: {}
});
