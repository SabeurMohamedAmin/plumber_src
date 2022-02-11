<script>
import SelectFilter from "components/SelectFilter";
import SkeletonCard from "components/SkeletonCard";


export default {
  name: "SmallCard",
  components: {SkeletonCard, SelectFilter},
  props:{
    seeDetails:{
      type: Boolean,
      default: true,
    },
    product:{
      type: Object,
      default : {
        id:1,
        title:'test title',
        details: 'test for details',
        category: 'test for category',
        img:' https://cdn.quasar.dev/img/parallax2.jpg',
      },
    },
  },
  data:()=>({
    stars: 4,
    title:'hello im title 1245673',
    clicked : false,
    cardLoading: true
  }),

  watch:{

  },

  methods:{
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
  <article class="my-card">
      <SkeletonCard v-if="cardLoading"/>

    <q-card class="my-card" :class="{'card-visibility':cardLoading}" >
      <q-img class="img-small-card" :src="product.img" :alt="product.title" @load="cardLoading = false" loading="lazy">

      </q-img>

      <q-card-section class="q-pb-xs q-mt-sm">
        <q-btn
          fab
          color="primary"
          icon="add"
          class="absolute btn-add q-pa-sm "
        />
        <div class="row no-wrap items-center q-pb-xs">
          <h4 class="col ellipsis q-ma-none text-h6" > {{ product.title }} </h4>
        </div>
      </q-card-section>
      <q-separator />

      <q-card-actions class="justify-between q-px-xs no-wrap">
        <q-btn flat round size="sm" icon="event" />
        <q-btn flat color="primary" class="small-text " v-if="seeDetails" to="/details">
          See Details
        </q-btn>
      </q-card-actions>
    </q-card>
  </article>
</template>



<style scoped>
.my-card{
  width: 100%;
  max-width: 160px;
  height: 220px;
}
.btn-add{
  top: -8px;
  right: 10px;
  transform: translateY(-50%);
}
.small-text {
font-size: .9rem;
}
.img-small-card{
  max-height:110px;
  width: 100%;
}

.card-visibility{
  visibility: hidden;
}

</style>




