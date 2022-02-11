<script>
const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
];

export default {
  name:'InputSelect',
  data:()=>({
    options: stringOptions,
    model: null,
  }),
  methods:{
    filterFn (val, update, abort) {
      if (val.length < 1) {
        abort()
        return
      }
      update(() => {
        const needle = val.toLowerCase()
        this.options = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    }

  }

}
</script>


<template>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-select
        clearable
        filled
        dense
        use-input
        v-model="model"
        v-model:options="options"
        @filter="filterFn"
        label="Standard"
        class="slc"
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


<style scoped>
.slc{
  width: 250px
}
</style>
