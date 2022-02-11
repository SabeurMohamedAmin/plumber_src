<template>
  <article v-scroll="showBackToTop">
    <router-view />

    <q-btn
      reveal
      size="md"
      square
      icon="arrow_upward"
      class="bg-gradient back-to-top q-pa-sm bold text-h5"
      v-show="showBackToTopBtn"
      @click="backToTop"
    />

    <q-btn
      reveal
      size="sm"
      square
      icon="home"
      class="text-h6 bg-gradient back-to-home q-pa-sm q-px-lg"
      to="/"
      v-show="!myPath"
    />

  </article>
</template>
<script>

export default{
  name: 'App',
  data:()=>({
    showBackToTopBtn: false,
  }),
  methods:{
    showBackToTop(position){
      position > 400 ? this.showBackToTopBtn = true : this.showBackToTopBtn = false;
    },
    backToTop(){
      window.scrollTo({
        left:0,
        top:0,
        behavior:"smooth"
      });
    },

  },
  computed:{
    myPath(){
      console.log(this.$route.path)
      return this.$route.path === '/all';
    }
  }
}
</script>

<style>
.container{
  margin: auto;
  max-width: 1250px;
  min-width: 310px;
  background: rgba(238, 238, 238, 0.5);
}
.back-to-top{
  bottom: 60px;
  left: 10px;
  position: fixed;
}
.back-to-home{
  bottom: 16px;
  left: 10px;
  position: fixed;
}
</style>
