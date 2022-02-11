<script>
import SelectFilter from "components/SelectFilter";
import SkeletonCard from "components/SkeletonCard";
export default {
  name: "Card",
  components: {SkeletonCard, SelectFilter},
  props:{
    product:{
      type: Object,
      default : {
        id:1,
        title:'test title',
        details: 'test for details',
        category: 'test for category',
        img:'https://cdn.quasar.dev/img/chicken-salad.jpg',
      },
    }
  },
  data:()=>({
    stars: 4,
    title:'hello im title 1245673',
    clicked : false,
    cardLoading: true,
  }),

  watch:{

  },

  methods:{
    sayHi(){
      console.log('hello')
    }
  },


  computed:{
    cardTitle(){
      return this.title.length > 18 ? `${this.title.substring(0, 18)} ...` : this.title ;
    },
    unfoldStat(){
      return this.clicked ? `unfold_less` : "unfold_more" ;
    }
  }
}
</script>


<template>


<article class="my-card q-ma-md">
  <SkeletonCard v-if="cardLoading" bigCard />
  <q-card class="my-card" :class="{'card-visibility':cardLoading}" v-show=" !cardLoading">
    <q-img
      class     ="img-small-card"
      :src      ="product.img"
      :alt      ="product.title"
      @load     ="cardLoading = false"
      loading   = "lazy"
    >
    </q-img>

    <q-card-section class="q-pb-none q-ma-sm">
      <q-btn
        fab
        color="primary"
        icon="add"
        class="absolute btn-add q-pa-sm"
      />
      <div class="row no-wrap items-center q-pb-xs">
          <h4 class="col ellipsis q-ma-none text-h6" > {{ product.title }} </h4>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none p-test">
      <div class="flex items-center justify-between row">
        <h5 class="text-subtitle1 q-ma-none text-bold">Description</h5>
        <q-icon
          class="cursor-pointer extender"
          :name="unfoldStat"
          @click="clicked = !clicked"
          size="1.3em"
        ></q-icon>
      </div>

      <p :class="[{overflowAuto:clicked}, 'overflow-aut', 'scroll']">{{product.details}} :: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquam assumenda cum eveniet hic in ipsum necessitatibus recusandae reiciendis sapiente?
        Distinctio ducimus molestias nisi perferendis quibusdam reiciendis, sunt tempore velit veniam!
      </p>


    </q-card-section>

    <q-separator />

    <q-card-actions class="justify-between q-pa-xs">
      <q-btn flat round icon="event" />
      <q-btn flat color="primary" to="/details">
        See More Details
      </q-btn>
    </q-card-actions>
  </q-card>
</article>
</template>



<style scoped>
i.extender{
  transform: translateX(5px);
}
.overflow-aut{
  overflow:hidden;
  height: 80%;
  transition:all .4s ease-in-out;
}
.overflowAuto{
  overflow:auto;
  padding: 2px;
  border-radius: 8px;
  background: rgba(238, 238, 238, 0.3);
}
.p-test{
  height: 34%;
}
.my-card{
  width: 100%;
  max-width: 220px;
  height: 400px;
}
.btn-add{
  top: -8px;
  right: 0;
  transform: translateY(-50%);
}
.card-visibility{
  visibility: hidden;
}


.img-small-card{
  max-height:150px;
  width: 100%;
}
</style>




