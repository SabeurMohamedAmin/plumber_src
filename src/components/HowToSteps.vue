<script>
export default {
  name:'HowToSteps',
  props:{
    steps:{
      type: Array,
      default:[
        {
          id          :"s_1",
          name        : "Step_1",
          stepOne     : "There Is Not Step's For Now, We Will Add Steps Soon. 1"
        },
        {
          id          :"s_2",
          name        : "Step_2",
          stepOne     : "There Is Not Step's For Now, We Will Add Steps Soon. 2"
        },
        {
          id          :"s_3",
          name        : "Step_3",
          stepOne     : "There Is Not Step's For Now, We Will Add Steps Soon. 3"
        },
        {
          id          :"s_4",
          name        : "Step_4",
          stepOne     : "There Is Not Step's For Now, We Will Add Steps Soon. 4"
        },
        {
          id          :"s_5",
          name        : "Step_5",
          stepOne     : "There Is Not Step's For Now, We Will Add Steps Soon. 5"
        },
      ]


    }
  },
  data: ()=>({
    tab: 'Step_1',

    }),
}
</script>


<template>
  <q-tabs
    v-model="tab"
    dense
    class="text-grey"
    active-color="primary"
    indicator-color="primary"
    align="justify"
    narrow-indicator
  >
    <q-tab v-for="step in steps" :key="step.id" :name="step.name" :label="step.name" no-caps/>

  </q-tabs>

  <q-separator />
  <q-tab-panels v-model="tab" animated>
    <q-tab-panel v-for="step in steps" :key="step.id" :name="step.name" :label="step.name" >
      <div class="text-h6">Mails</div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      {{step.stepOne}}
    </q-tab-panel>
  </q-tab-panels>
</template>
