<script>
  export default {
    name: "ListProductQuantities",
    data: () => ({
      number: 1,
      persistent: false,
    }),

    methods: {
      increment() {
        (this.number >= 1 && this.number<= 999) ? this.number++ : this.number;

      },
      decrement() {
        (this.number > 1 && this.number<= 999) ? this.number-- : this.number;
      },
      addToNumber(e){
        const value = e.target.value;
        if(typeof(+value) ==="number" && value > 1 && value <= 999){
          this.number = value;
        }
      }
    }
  }
</script>


<template>
  <div class="inline-block q-ma-none" >
    <q-btn
      @touchstart.stop @mousedown.stop
      v-touch-repeat:0:200.mouse.enter.space="decrement"
      color="red-7"
      size=""
      flat
      round
      icon="remove"
      class="small-height"
    />

    <span class="q-px-xs" @click="persistent = !persistent" @touchstart.stop>
      {{ number }}
    </span>

    <q-btn
      @touchstart.stop @mousedown.stop
      v-touch-repeat:0:250.mouse.enter.space="increment"
      color="blue-7"
      flat
      round
      icon="add"
      class="small-height"
    />
  </div>


  <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale" class="z-top">
    <q-card class="bg-blue-8 text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">Add Number from 1 To 999</div>
      </q-card-section>

      <q-card-actions align="right" class="bg-white">
        <input class="col-8 q-pa-xs" type="number" min="1" max="999" @input="addToNumber" value="">
        <q-space></q-space>
        <q-btn flat right label="Done" v-close-popup class="text-blue-7 col-3" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>


<style scoped>
  .small-height{
    min-height: 1em;
    min-width: 1.5em;
  }
</style>
