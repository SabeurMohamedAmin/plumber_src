<template>
  <div class="row q-pt-md q-pb-sm">
      <q-avatar
          color="blue-7"
          text-color="white"
          icon="perm_identity"
          class="self-center q-mx-auto inline-block"
      />
  </div>
    <q-list>
      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Setting</q-item-label>
          <q-item-label caption>Create your Personal settings</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="settings"></q-icon>
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Log out</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="logout"></q-icon>
        </q-item-section>
      </q-item>

    </q-list>
  <q-separator class="bg-grad q-mt-sm shadow-1" inset />
</template>

<script>
export default {
  name: "DrawerProfile",

}
</script>

<style scoped>

</style>
