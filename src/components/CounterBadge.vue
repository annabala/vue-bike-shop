<template>
  <div v-if="count > 0" class="counterBadge">{{ count }}</div>
</template>
<script>
export default {
  name: "CounterBadge",
  props: {
    count: {
      type: Number,
      default: null
    }
  }
};
</script>
<style lang="scss">
.counterBadge {
  $root: &;
  background-color: $cOrange;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
}
</style>
