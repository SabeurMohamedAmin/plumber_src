<template>
  <Gaz></Gaz>
  <q-separator class="q-mx-xl q-my-sm"/>

  <Water ></Water>
  <q-separator class="q-mx-xl q-my-sm"/>

  <Sanitation></Sanitation>
</template>

<script>
import Gaz from "pages/Gaz";
import Water from "pages/Water";
import Sanitation from "pages/Sanitation";
export default {
  name: "All",
  components: {Sanitation, Water, Gaz}
}
</script>

<style scoped>

</style>
