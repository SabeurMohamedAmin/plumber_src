<script>
export default {
  name: "Lists",
  data:()=>({
    searchBarreStat: true,
    searchValue:'',
  }),
  methods:{
    searchClicked(){
      console.log(this.searchValue)
    },
    toggleSearchBarre(){
      this.searchBarreStat = !this.searchBarreStat;
    }
  },
  computed:{

  }
}
</script>

<template>
  <header class="fixed z-top full-width">
    <div class="row no-wrap shadow-1">
      <q-toolbar class="col-12 bg-grey-3">
        <q-btn flat dense icon="sort_by_alpha" label="Order By" class="q-pa-sm rounded-borders q-card--bordered">
          <q-menu class="z-top">
            <q-list>
              <q-item clickable v-ripple>
                <q-item-section>Order By Name</q-item-section>
                <q-icon size="xs" name="arrow_downward" class="q-mx-xs self-center"/>
              </q-item>
              <q-separator />
              <q-item clickable v-ripple>
                <q-item-section>Order By Name</q-item-section>
                <q-icon size="xs" name="today" class="q-mx-xs self-center"/>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-space />
        <q-btn flat round dense
               icon="search"
               class="q-mx-md"
               @click="searchBarreStat=!searchBarreStat"
               v-show="!searchBarreStat"/>
        <q-btn push dense no-ripple color="primary" icon="add" label="Create New List" class="q-mr-sm"/>
      </q-toolbar>
    </div>
    <!-- equivalent -->
    <q-slide-transition>
      <div class="row bg-grey-2 q-px-xs" v-show="searchBarreStat">
        <q-input color="primary"
                 v-model="searchValue"
                 label="Search"
                 class="q-pa-xs q-px-xs col-11 text-h5"
        >
          <template v-slot:before>
            <q-btn round flat icon="search" class="cursor-pointer filter-hover"  @click="searchClicked"/>
          </template>
          <template v-if="searchValue" v-slot:append>
            <q-icon name="cancel" @click.stop="searchValue = null" class="cursor-pointer" />
          </template>
        </q-input>
        <div class="col-1 close-search-barre items-center justify-center row">
          <q-btn round flat icon="close" size="md" @click="toggleSearchBarre"></q-btn>
        </div>
      </div>
    </q-slide-transition>


</header>

<section class="row justify-center big-top-padding">

  <article v-for="a in 20" class=" col-xs-10 col-sm-5 col-md-4">
    <q-card class="my-card col-3 q-ma-md " flat bordered >
      <q-card-section  class="flex flex-start no-wrap q-pa-xs no-pointer-events--children" >
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/parallax2.jpg" draggable="false"/>
        </q-avatar>
        <q-card-section class="flex wrap q-pa-xs">
          <q-chip size="sm" class="glossy q-mx-xs q-mt-none bg-yellow-3 " icon="local_fire_department" label="gaz" />
          <q-chip size="sm" class="glossy q-mx-xs q-mt-none bg-light-blue-3" icon="water_drop" label="water"/>
          <q-chip size="sm" class="glossy q-mx-xs q-mt-none bg-blue-grey-7" icon="route" label="sanitation"/>
        </q-card-section>

      </q-card-section>
      <q-card-section class="q-pa-none">
        <q-list >
          <q-expansion-item
              switch-toggle-right-side
              expand-separator
              label="Customer Name NameName NameName Name"
              caption="Guelma city guelma cityguelma city"
              caption-lines="1"
              label-lines="2"
          >
            <q-card>
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </q-card-section>

      <q-separator />

      <q-card-actions>

        <q-btn flat>
          7:30PM
        </q-btn>
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>
  </article>
</section>

</template>

<style scoped>
.no-pointer-events--children{
  user-select: none;
}

.big-top-padding{
  padding-top: 110px;
}
</style>