<template>
  <!-- SEKELETON BIG CARD -->

  <q-card class="skeleton-card" v-if="bigCard">
    <q-skeleton height="140px" square />
    <q-item class="q-my-sm">
      <q-item-section class="q-my-sm">
        <q-item-label>
          <q-skeleton type="rect" animation="fade" class="q-mb-lg"/>
        </q-item-label>
        <q-item-label>
          <q-skeleton type="text" animation="fade" />
        </q-item-label>
        <q-item-label caption class="q-my-md">
          <q-skeleton type="text" animation="fade" class="q-my-sm" v-for="a in 4" :key="a"/>
        </q-item-label>
      </q-item-section>
      <q-item-section avatar class="self-start">
        <q-skeleton type="QAvatar" animation="fade" />
      </q-item-section>
    </q-item >
    <q-card-actions align="right" class="action-btn" >
      <q-skeleton type="QBadge" />
    </q-card-actions>
  </q-card>

  <!-- SEKELETON SMALL CARD -->
  <q-card class="skeleton-sm-card" v-else @load="sayHi">
    <q-skeleton height="90px" square />
    <q-item class="q-pa-xs" >
      <q-item-section class="q-mt-md">
        <q-item-label>
          <q-skeleton type="text" animation="fade" />
        </q-item-label>
        <q-item-label caption class="q-mt-md">
          <q-skeleton type="text" animation="fade" class="q-my-sm" v-for="a in 2" :key="a"/>
        </q-item-label>
      </q-item-section>
      <q-item-section avatar class="self-start">
        <q-skeleton type="QAvatar" animation="fade" />
      </q-item-section>
    </q-item >
    <q-card-actions align="right" class="action-btn" >
      <q-skeleton type="QBadge"/>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "SkeletonCard",
  props:{
    bigCard:{
      type: Boolean,
      default:false,
    }
  },
  methods:{
    sayHi(){
      console.log('hello')
    }
  }
}
</script>

<style scoped>
.skeleton-card{
  max-width: 220px;
  height: 400px;
}
.skeleton-sm-card{
  max-width: 160px;
  height: 220px;
}
</style>
