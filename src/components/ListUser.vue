<script>
export default {
  name: "ListUser",
  data:()=>({
    //menuList:false,
    persistent: false,
    fabButton: false,
  }),
  methods:{
    //toggleMenuList(){
    //  this.menuList = !this.menuList;
    //},
    deleteList(){
      console.log("List Deleted")
    }
  },
  computed:{
    //xsScreen(){
    //  return this.$q.screen.name === "xs";
    //},
    //sxMenuClasses(){
    //  if(this.xsScreen && this.menuList){
    //    return 'xs-menu-list '
    //  }
    //},
    //transitionMenuList(){
    //  return ((this.xsScreen && this.menuList) || !this.xsScreen) ? true : false;
    //}
  }
}
</script>


<template>

    <div class= "q-gutter-sm q-ma-xs q-header--bordered">
      <q-item tag="div" class="q-pa-xs">
        <q-item-section side>
          <q-avatar size="48px">
            <img src="https://cdn.quasar.dev/img/avatar.png" />
            <q-badge floating color="teal">new</q-badge>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h5">Mary</q-item-label>
          <section class="row items-baseline text-grey-7">
            <q-item-label class=" q-mx-sm"> Gaz </q-item-label>
            <q-item-label class=" q-mx-sm"> Water </q-item-label>
            <q-item-label class=" q-mx-sm"> Sanitation </q-item-label>
          </section>
        </q-item-section>
        <q-item-section center side>
          created: 24 january 2022
        </q-item-section>

        <q-item-section center side>
          <div >
            <q-fab
              flat
              v-model="fabButton"
              label-position="top"
              external-label
              color="grey-7"
              icon="menu"
              direction="left"
              padding="xs"
            >
              <q-fab-action glossy square  padding="1px" color="green-7" @click="" label="Edit List" class="font-small ">
                <q-icon name="edit" size="15px"></q-icon>
              </q-fab-action>
              <q-fab-action glossy square  padding="1px" color="blue-7" @click="" label="Save List" class="font-small ">
                <q-icon name="save" size="15px"></q-icon>
              </q-fab-action>
              <q-fab-action  glossy square padding="1px" color="red-7" @click="" label="Delete List" class="font-small ">
                <q-icon name="delete" size="15px"></q-icon>
              </q-fab-action>
            </q-fab>
          </div>

        </q-item-section>


      </q-item>


<!-- DELETE DIALOG PRESISTE DELETE OR CANCEL-->

      <q-dialog v-model="persistent" persistent transition-show="scale" transition-hide="scale">
        <q-card class="bg-red-8 text-white" style="width: 300px">
          <q-card-section>
            <div class="text-h6">Persistent</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Are you sure you want to delete this <b>Mary</b> List.
          </q-card-section>


          <q-card-actions align="right" class="bg-white">
            <q-btn flat label="Delete" v-close-popup class="text-red-7" @click="deleteList"/>
            <q-btn flat label="Cancel" v-close-popup class="text-blue-grey-7"/>
          </q-card-actions>
        </q-card>
      </q-dialog>

    </div>
</template>


<style scoped>
.xs-menu-list{
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  margin: 0;
  padding: 0;
}

.fade-enter-active, .fade-leave-active{
  transition: all .4s ease-in-out;
  position: absolute;
  top: 100%;
}
.fade-enter-from, .fade-leave-to{
  opacity: 0;
  top: 200%;
}

.font-small, .font-small>* {
font-size: .8rem;
}
</style>
