<script>
import ListProductQuantities from "components/ListProductQuantities";
export default {
  name: "ListProduct",
  props:{
    productId:{},
    productName:{},
    productQuantities:{},
    productCategory:{},
    productImage:{},
  },
  components: {ListProductQuantities},
  data:()=>({
    }),
  methods:{
    handleHold(){
      let bar = this.$refs.bar;
      bar.start(500);
      setTimeout(()=>{bar.stop()}, 2000)
    }
  }
}
</script>


<template>

  <div class="q-pa-sm"  v-touch-hold.mouse="handleHold">
    <q-list bordered class="rounded-borders q-pa-none" style="max-width: 99%">

      <q-item class="items-center q-pa-xs col-1 justify-between self-start">
        <q-item-section avatar top class="size-img q-pr-sm">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" color="black"  size="120px"/>
        </q-item-section>

        <q-item-section top class="col-7 col-shrink">
          <q-item-label lines="2" class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase">
            <router-link to="/details" tag="span" class="cursor-pointer">Racorde Cuivre 20mm</router-link>

          </q-item-label>
          <q-item-label caption lines="1">
            @rstoenescu in #3: > Generic type parameter for props
          </q-item-label>

        </q-item-section>

        <q-item-section side class="text-grey-8 col-4">
          <div class="row items-center justify-between full-width no-wrap">
            <ListProductQuantities />
            <q-fab
              flat
              label-position="top"
              external-label
              color="grey-7"
              icon="more_vert"
              direction="left"
              padding="0"
            >
              <q-fab-action glossy square padding="1px" color="blue-7" @click="" label="See Details" class="font-small ">
                <q-icon name="print" size="15px"></q-icon>
              </q-fab-action>
              <q-fab-action glossy square  padding="1px" color="red-7" @click="handleHold" label="Delete product" class="font-small ">
                <q-icon name="delete" size="15px"></q-icon>
              </q-fab-action>
            </q-fab>
            </div>


        </q-item-section>
      </q-item>
    </q-list>
  </div>

  <!-- ajax bar to reference that the item is deleted -->
    <q-ajax-bar
      ref="bar"
      position="bottom"
      color="red"
      size="10px"
      skip-hijack
    />
</template>


<style scoped>
  .size-img{
    width: 8%;
    min-width: 100px;
  }
  .font-small{
    font-size: .8rem;
  }
</style>
