<script>
import ListUser from "components/ListUser";
import ListProduct from "components/ListProduct";
export default {
  name: "RenderList",
  components: {ListProduct, ListUser},
  data:()=>({
    menuList:false,
  }),/*
  methods:{
    toggleMenuList(){
      this.menuList = !this.menuList;
    }
  },
  computed:{
    xsScreen(){
      return this.$q.screen.name === "xs";
    },
    sxMenuClasses(){
      if(this.xsScreen && this.menuList){
        return 'xs-menu-list '
      }
    },
    transitionMenuList(){
      return (this.xsScreen && this.menuList) ? true : false;
    }
  }*/
}
</script>


<template>
  <header>
    <ListUser/>
  </header>
  <main>
    <section>
      <ListProduct v-for="a in 20"/>
    </section>
  </main>
</template>


<style scoped>
</style>
