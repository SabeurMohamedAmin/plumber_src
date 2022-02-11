<script>
import GridPage from "layouts/GridPage";
import testArray from '../components/products';


export default {
  components: {
    GridPage
  },
  mounted() {
  },
  data:()=>({
    testArray,

  }),
  methods:{


  },
  computed:{
  }

}
</script>


<template>
  <div class="q-my-md">
    <section class="page-grid-title row q-mx-xl q-my-md">
      <h1 class="grid-title col-8 text-h3">Water</h1>
    </section>

    <GridPage :arrayProducts="testArray" v-if="testArray"/>
  </div>

</template>


<style scoped>

</style>

