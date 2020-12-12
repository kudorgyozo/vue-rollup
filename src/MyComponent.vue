<template>
  <h1>Hello VUe {{ counter }}</h1>

  <div class="szar">grid</div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";

const MyComponent = defineComponent({
  data() {
    return {
      counter: 0,
    };
  },

  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
});

export default MyComponent;

// export const MyComponent = {
//   data() {
//     return {
//       counter: 0,
//     };
//   },

//   mounted() {
//     setInterval(() => {
//       this.counter++;
//     }, 1000);
//   },
// };
</script>

<style>
</style>
