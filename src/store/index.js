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
        company: "Kelly's",
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
        description:
          "<p>Kitsuma is a point to point singletrack trail that has a machine groomed tread in most parts. Trails are drying out quickly. When combined with Otero Upper, this trail is just crazy fast, flowy, amazingness. Otherwise dry. You can ride around everything, which will give you a chance to look before you leap.</p>",
        images: ["bike1.png", "bike2.jpg"]
      },
      {
        name: "Beautiful red bike",
        id: 53363,
        company: "Kelly's",
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
        description:
          "<p>Chewed up, lots of braking bumps, but still fun. Butcher Ranch is the main trail for the classic Downieville Downhill. You can find everyone out here having fun from people in body armor and downhill bikes to families testing their kids limits to xc racer types riding intervals.</p><p>Blast down Ridgeline all the way to Lake Imaging Road. For the ultimate downhill blast, ride to the top of Hickory Mountain Loop, take a minute to catch your breath and prepare to smile all the way to the parking lot, barely needing to pedal.</p>",
        images: ["bike1.png", "bike3.jpg", "bike1.png", "bike3.jpg"]
      },
      {
        name: "Superfast bike",
        id: 53364,
        company: "Scott",
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
        description:
          "<p>Chewed up, lots of braking bumps, but still fun. Butcher Ranch is the main trail for the classic Downieville Downhill. You can find everyone out here having fun from people in body armor and downhill bikes to families testing their kids limits to xc racer types riding intervals.</p><p>Blast down Ridgeline all the way to Lake Imaging Road. For the ultimate downhill blast, ride to the top of Hickory Mountain Loop, take a minute to catch your breath and prepare to smile all the way to the parking lot, barely needing to pedal.</p>",
        images: ["bike1.png", "bike2.jpg"]
      },
      {
        name: "Beautiful red bike",
        id: 533636,
        company: "Scott",
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
        description:
          "<p>Fast, fun descent. This is the third downhill only trail on the north side trail network. A steep, punchy switchback filled climb follows a set of spines from Ridgecrest Conference Center in Black Mountain, NC to the parking lot of Old Fort Picnic area. Blast down Ridgeline all the way to Lake Imaging Road. Don't miss this trail!</p>",
        images: ["bike1.png", "bike3.jpg"]
      },
      {
        name: "Superfast bike",
        id: 533641,
        company: "Scott",
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
        description:
          "<p>Fast, fun descent. This is the third downhill only trail on the north side trail network. A steep, punchy switchback filled climb follows a set of spines from Ridgecrest Conference Center in Black Mountain, NC to the parking lot of Old Fort Picnic area. Blast down Ridgeline all the way to Lake Imaging Road. Don't miss this trail!</p><p>Narrow in places and twisty througout, this leg churner is sure to keep you on you toes. Trail is in good shape, minus dirt bikers dusting it up some. A steep, punchy switchback filled climb follows a set of spines from Ridgecrest Conference Center in Black Mountain, NC to the parking lot of Old Fort Picnic area. The end of the jump line trail there is a fairly steep climb to get to the next section. Fun!</p>",
        images: ["bike1.png", "bike2.jpg"]
      },
      {
        name: "Beautiful red bike",
        id: 533643,
        company: "Scott",
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
        description:
          "<p>Fast, fun descent. A steep, punchy switchback filled climb follows a set of spines from Ridgecrest Conference Center in Black Mountain, NC to the parking lot of Old Fort Picnic area. Blast down Ridgeline all the way to Lake Imaging Road. Don't miss this trail!</p><p>Narrow in places and twisty througout, this leg churner is sure to keep you on you toes. Trail is in good shape, minus dirt bikers dusting it up some. A steep, punchy switchback filled climb follows a set of spines from Ridgecrest Conference Center in Black Mountain, NC to the parking lot of Old Fort Picnic area. The end of the jump line trail there is a fairly steep climb to get to the next section. Fun!</p>",
        images: ["bike1.png", "bike3.jpg"]
      },
      {
        name: "Superfast bike",
        id: 533564,
        company: "Unibike",
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
        description:
          "<p>Fast, fun descent. A steep, punchy switchback filled climb follows a set of spines from Ridgecrest Conference Center in Black Mountain, NC to the parking lot of Old Fort Picnic area. Blast down Ridgeline all the way to Lake Imaging Road. Don't miss this trail!</p><p>Narrow in places and twisty througout, this leg churner is sure to keep you on you toes. Trail is in good shape, minus dirt bikers dusting it up some. A steep, punchy switchback filled climb follows a set of spines from Ridgecrest Conference Center in Black Mountain, NC to the parking lot of Old Fort Picnic area. The end of the jump line trail there is a fairly steep climb to get to the next section. Fun!</p>",
        images: ["bike1.png", "bike2.jpg"]
      },

      {
        name: "Child bike",
        id: 53365,
        company: "Unibike",
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
        description:
          "<p>Fast, fun descent. A steep, punchy switchback filled climb follows a set of spines from Ridgecrest Conference Center in Black Mountain, NC to the parking lot of Old Fort Picnic area. Blast down Ridgeline all the way to Lake Imaging Road. Don't miss this trail!</p><p>Narrow in places and twisty througout, this leg churner is sure to keep you on you toes. Trail is in good shape, minus dirt bikers dusting it up some. A steep, punchy switchback filled climb follows a set of spines from Ridgecrest Conference Center in Black Mountain, NC to the parking lot of Old Fort Picnic area. The end of the jump line trail there is a fairly steep climb to get to the next section. Fun!</p>",
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
