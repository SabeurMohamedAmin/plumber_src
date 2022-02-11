<script>
import DrawerProfile from "components/DrawerProfile";
import SelectFilter from "components/SelectFilter";
import DrawerSingleList from "components/DrawerSingleList";
export default {
  name: "DrawerList",
  components: {DrawerSingleList, SelectFilter, DrawerProfile},
  data:()=>({
    check1: false,
    check2: false,
    radioList:'',
    product: [
      {
      value     :'coude_cuive_90deg',
      title     :'coude cuive 90deg',
      img       :'../assets/bmw.png',
      category  :'gaz'
    },
    {
      value     :'coude_cuive_45deg',
        title     :'coude cuive 45deg',
      img       :'../assets/bmw.png',
      category  :'gaz'
    },
      {
        value     :'coude_pvc_90deg',
        title     :'coude pvc 90deg',
        img       :'src/assets/bmw.png',
        category  :'sanitation'
      },
      {
        value     :'coude_pvc_45deg',
        title     :'coude pvc 45deg',
        img       :'../assets/bmw.png',
        category  :'sanitation'
      },
      {
        value     :'coude_tm_90deg',
        title     :'coude tm 90deg',
        img       :'../assets/bmw.png',
        category  :'water'
      },
      {
        value     :'coude_tm_45deg',
        title     :'coude tm 45deg',
        img       :'../assets/bmw.png',
        category  :'water'
      },
      {
        value     :'coude_pvc_90deg',
        title     :'coude pvc 90deg',
        img       :'src/assets/bmw.png',
        category  :'sanitation'
      },
      {
        value     :'coude_pvc_45deg',
        title     :'coude pvc 45deg',
        img       :'../assets/bmw.png',
        category  :'sanitation'
      },
      {
        value     :'coude_tm_90deg',
        title     :'coude tm 90deg',
        img       :'../assets/bmw.png',
        category  :'water'
      },
      {
        value     :'coude_tm_45deg',
        title     :'coude tm 45deg',
        img       :'../assets/bmw.png',
        category  :'water'
      }
    ],

    thumbStyle: {
      right: '4px',
      borderRadius: '5px',
      backgroundColor: '#027be3',
      width: '5px',
      opacity: 0.75
    },

    barStyle: {
      right: '2px',
      borderRadius: '9px',
      backgroundColor: '#027be3',
      width: '9px',
      opacity: 0.2
    }

  }),
  methods:{
    test(emitVal){
      this.radioList = emitVal;
      console.log(emitVal)
      console.log(this.radioList)
    }
  },
  computed:{
  }
}
</script>


<template>
  <DrawerProfile/>
  <q-btn
      push dense no-ripple
      color="primary" icon="add"
      label="Create New List"
      class="q-my-md q-mx-auto flex"
  />

  <q-list class="q-mx-auto drawer-items">
    <q-item-label header class="text-h6 q-px-sm  q-pb-sm q-pt-none ">Your Old Lists</q-item-label>

    <q-scroll-area
      :thumb-style="thumbStyle"
      :bar-style="barStyle"
      class="scroll-class shadow-2"
    >

    <q-item
      v-ripple
      tag="label"
      v-for="item in product"
      :key="item.value"
      class="q-card--bordered list-item"
      :class= "{'bg-light-blue-2 rounded-borders': radioList === item.value}"
    >
      <q-item-section side class="q-ma-none q-pa-none q-mx-xs col-1 ">
        <q-radio size="xs" v-model="radioList" :val="item.value"/>
      </q-item-section>

      <q-item-section
        width="60px"
        class="q-ma-none q-pa-none q-mr-sm col-2"
      >
        <q-img
          loading   ="lazy"
          width     ="60px"
          fit       ="fill"
          :src      ="item.img"
          class     ="q-pa-xs"
        />
      </q-item-section>
        <q-item-section class="q-ma-none q-pa-none q-px-xs col-6">
          <q-item-label>{{ item.title }}</q-item-label>
          <q-item-label caption lines="1">
            Category: {{item.category  }}
          </q-item-label>
        </q-item-section>

      <q-item-section class="q-ma-none q-pa-none col-2">
        <q-btn size="lg" flat dense round icon="more_vert" class="q-ma-none q-pa-none" click.prevent/>
      </q-item-section>
    </q-item>

      </q-scroll-area>
  </q-list>
</template>


<style scoped>

.drawer-items{
  width: 98%;
}

.scroll-class, .q-scrollarea__content{
  height: calc(100vh - 285px);
  width: 100%;
}

.list-item{
  width: 100%;
}
</style>
