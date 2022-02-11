<script>
export default {
  name: "NewList",
  data:()=>({
    name :null,
     age : null,
    accept :false,

    modelMultiple: ['Facebook'],
    options: [
      'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
    ],

    categories:[
      {
        label   : 'Gaz',
        icon    : 'local_fire_department',
        color   :  'bg-yellow-3'
      },
      {
        label   : 'Water',
        icon    : 'water_drop',
        color   : 'bg-light-blue-3'
      },
      {
        label   : 'Sanitation',
        icon    : 'route',
        color   : 'bg-blue-grey-7'
      }
    ],
    selectedCategories:[],
  }),
  methods:{
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-7',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  },
}
</script>


<template>
  <pre>
    category of the list
    customer Name/title of list
    address of costumer
    description
    create date
    avatar</pre>



  <div class="q-pa-md" style="max-width: 400px">

    <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
    >
      <q-input
          filled
          v-model="name"
          label="Customer name *"
          hint="please enter customer name or list name"
          lazy-rules
          :rules="[ val => val && val.trim().length > 3 || 'Please type something longe then 3 characters']"
      />




        <div class="q-pa-md">
          <div class="q-gutter-md row items-start">

            <div style="min-width: 250px; max-width: 300px">
              <q-badge color="secondary" class="q-mb-md">
                Model: {{ selectedCategories || '[]' }}
              </q-badge>

              <q-select
                  filled
                  v-model="selectedCategories"
                  multiple
                  :options="categories"
                  use-chips
                  stack-label
                  label="Multiple selection"
              >
              </q-select>

            </div>
          </div>
        </div>












      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>

</template>


<style scoped>

</style>