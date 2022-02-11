<template>
    <q-btn  flat :loading="loading" color="blue-5" @click="simulateProgress"  class="full-width q-mt-md">
      Load More ...
      <template v-slot:loading>
        <q-spinner
          color="primary"
          size="1.3em"
          :thickness="3"
        />
      </template>
    </q-btn>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    simulateProgress() {
      // we set loading state
      this.loading = true;
      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        this.loading = false
      }, 1800);
    }
  }
}
</script>
