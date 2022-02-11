<script>

  const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
  ].reduce((acc, opt) => {
  for (let i = 1; i <= 5; i++) {
  acc.push(opt + ' ' + i)
}
  return acc
}, [])

  export default {
    name: "SelectSanitation",
    data:()=>({
  model: null,
  options: stringOptions,
}),
  methods:{
  filterFn (val, update, abort) {
  update(() => {
  const needle = val.toLocaleLowerCase()
  this.options = stringOptions.filter(v => v.toLocaleLowerCase().indexOf(needle) > -1)
})
},

  setModel (val) {
  this.model = val
}
}
}
</script>



<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">
      <q-select
        dense
        outlined
        options-dense
        use-input
        hide-selected
        fill-input
        label="Standard"
        input-debounce="0"
        :model-value="model"
        v-model:options="options"
        @filter="filterFn"
        @input-value="setModel"
        hint="enter the name of your list"
        style="width: 250px; padding-bottom: 32px"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>

<style>
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


<template>
  <section class="page-grid-title q-ma-lg row">
    <h1 class="grid-title col-8 text-h3" >Water</h1>
  </section>
  <GridPage :array-products="testArray"/>
</template>


<style scoped>

</style>

