<script>
import Card from "components/Card";
import SmallCard from "components/SmallCard";
import LoadButton from "components/LoadButton";

export default {
  name: "GridPage",
  props:{
    arrayProducts:{
      type: Array,
      default:[{
        id:1,
        title:'test title',
        details: 'test for details',
        category: 'test for category',
        img:'https://cdn.quasar.dev/img/parallax2.jpg',
      }],
    }
  },
  beforeMount(){
  },
  components: {LoadButton, SmallCard, Card},
  data:()=>({
    // this array will get items(Objects) from Props "arrayProducts" every time the use click load more 10 items will be
    // pushed to this array. it will be used to render those Object using loop on Component.
    items :[],
    isItemsEqualArrayProducts: false,
  }),
  methods: {
    manualOnLoad(){
      //calling onLoad Manually the done function to prevent a default error.
      this.onLoad(0, ()=>true)
    },
    onLoad( index, done) {
      if(this.doILoadMore){
        setTimeout(() => {
          const displayedArrayIndex = this.items.length;
          const nextArray = this.arrayProducts.filter((element,index) =>{
            while( index >= displayedArrayIndex && index < displayedArrayIndex + 10 ){
              return element;
            }
          });
          this.items.push(...nextArray);
          done()
        }, 800)

      }

    },
  },

  computed:{
    doILoadMore(){
      return this.items.length !== this.arrayProducts.length;
    }
  }
}

</script>


<template>

  <q-infinite-scroll @load="onLoad" :offset="300" >
    <section
      v-if="false"
      class="parent  full-width row wrap justify-center items-start content-start"
    >
      <Card v-for="product in arrayProducts" :key="product.id" class="div"/>
      <Card
        class      ="q-mr-sm"
        v-for      ="(product, index) in arrayProducts"
        :key       ="product.id"
        :product   ="product"
      />
    </section>

    <section class="parent full-width row wrap justify-center q-gutter-y-lg q-gutter-x-sm">
      <SmallCard
        class      ="q-mr-sm"
        v-for      ="(product, index) in items"
        :key       ="product.id"
        :product   ="product"
      />
    </section>
    <template v-slot:loading v-if="doILoadMore" >
      <div class="row justify-center">
        <q-spinner-dots color="primary" size="30px" />
      </div>
    </template>
    <load-button  @click="manualOnLoad" v-if="doILoadMore" > Load More ... </load-button>
  </q-infinite-scroll>

</template>


<style scoped>
.div{
  background: #eee;
}


</style>
