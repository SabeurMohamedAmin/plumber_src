<script>
import EssentialLink from 'components/EssentialLink.vue'
import DrawerList from "components/DrawerLists";

const tabsSection = [
  {
    title   : 'All',
    icon    : 'group_work',
    name    : '',
    to      : '/all',
  },
  {
    title   : 'Gaz',
    icon    : 'local_fire_department',
    name    : '',
    to      : '/gaz',
  },
  {
    title   : 'Water',
    icon    : 'water_drop',
    name    : '',
    to      : '/water',
  },
  {
    title   : 'Sanitation',
    icon    : 'route',
    name    : '',
    to      : '/sanitation',
  }
];

export default{
  name: 'MainLayout',
  components: {
    DrawerList,
    EssentialLink
  },
  mounted() {

    },



  data:()=>({
    tabsSection,
    rightDrawerOpen:false,
    navigate:"button",
    revealOffsetValue : 100,

  }),

  methods:{
    toggleRightDrawer() {
        this.rightDrawerOpen = !this.rightDrawerOpen
      },


  },

  computed:{
    drawerWidth(){
      return this.$q.screen.name === 'xs' ? 300 : 350 ;
    }
  }
}

</script>


<template>
  <q-layout view="hhr lpR ffr" >
    <q-header
      reveal
      bordered
      :reveal-offset  = "revealOffsetValue"
      height-hint     = "50px"
      class           = "text-grey-8 bg-gradient"
    >
      <q-toolbar>
        <q-toolbar-title  class="flex items-center">
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" alt="overlay"/>
          </q-avatar>
           <h2 class="q-mx-sm text-body1">Plumper Helper</h2>
        </q-toolbar-title>

        <q-btn dense flat round icon="menu" class="text-h6" @click="toggleRightDrawer"/>
      </q-toolbar>

      <q-tabs  class="text-body-xs" align="left" inline-label >
        <q-route-tab
            v-for="tab in tabsSection"
            :key="tab.title"
            :to="tab.to"
            :label="tab.title"
            target="_self"
            draggable="false"
        >
          <q-icon
              :name="tab.icon"
              size="xs"
              class="q-mx-xs"
              draggable="false"
          >
          </q-icon>
        </q-route-tab>
      </q-tabs>
    </q-header>

    <q-drawer
        :width="drawerWidth"
        class="drawer-aside"
        v-model="rightDrawerOpen"
        side="right" bordered
        overlay behavior="mobile"
    >
      <!-- drawer content -->
    <DrawerList/>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered reveal class="text-grey-8 footer">
      <q-toolbar class="footer" >

        <div class="row column items-center q-mb-md absolute-bottom-right">
            <q-btn
                title="see all your lists"
              icon="receipt_long"
              size="lg" to="/lists"
              class="list-btn bg-gradient"  draggable="false"
            />
        </div>


      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<style scoped>
.q-router-link--exact-active{
  color: #1976D2;
}

.footer{
  visibility: hidden;
  height: 75px;
  padding-right : 10px;
}

.list-btn, .logo-btn, .back-to-top{
visibility: visible;
}

.list-btn:hover{
  filter: brightness(70%);
}

.drawer-aside{
  width: 100vw;
}


</style>
