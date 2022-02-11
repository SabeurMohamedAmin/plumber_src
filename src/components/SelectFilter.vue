<script>

const stringOptions = [
  'List 1', 'List 2', 'List school', 'List Jym', 'Oracle', 'Restaurant', 'Home Guelma', 'Air Port',
  'List 4', 'List 3', 'List school 2', 'List Jym 2', 'Oracle 3', 'Restaurant 2', 'Home Guelma 2', 'Air Port 1'
].reduce((acc, opt) => {
    acc.push(opt)
  return acc
}, [])

export default {
  data:()=>({
    name:'',
    model: null,
    options: [],
  }),
  methods:{
    resetInput(el){

    },
    filterFn (val, update, abort) {
      update(() => {
        const needle = val.toLocaleLowerCase()
        this.options = stringOptions.filter(v => v.toLocaleLowerCase().indexOf(needle) > -1)
      })
    },

    setModel (val) {
      this.model = val
    },

  },
  computed:{
  }
}
</script>


<template>
      <q-select
        dense
        outlined
        options-dense
        use-input
        hide-selected
        fill-input
        class="app-list"
        input-debounce="300"
        :model-value="model"
        v-model:options="options"
        @filter="filterFn"
        @input-value="setModel"
        label="Store Lists"
        hint="choose your the list you want to add this item to"
       >
        <template v-slot:prepend>
          <q-icon name="list"/>
        </template>

        <template v-slot:append>
          <q-icon name="cancel" @click.stop="model=''" class="cursor-pointer"/>
        </template>

        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>
</template>



<style scoped>
/**
 * ----------------------------------------
 * About Scroll Barre of the Description
 * ----------------------------------------
 */
.q-position-engine::-webkit-scrollbar {
  width: 7px;
}

/* Track */
.q-position-engine::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
.q-position-engine::-webkit-scrollbar-thumb {
  background: #888;
}
.q-position-engine::-webkit-scrollbar-thumb:hover {
  background: #555;
}
/**
 * ----------------------------------------
 * END Scroll Barre of the Description
 * ----------------------------------------
 */

</style>
