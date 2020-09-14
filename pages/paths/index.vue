<template>
  <div class="container mx-auto px-4  py-20">
    <div class="flex flex-wrap mb-4">
      <PathCard
        v-for="(path, idx) in paths"
        :key="idx"
        :path="path"
        class="w-1/3">
      </PathCard>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import PathCard from '@/components/PathCard.vue';
  import PathService from '@/services/PathService.js';
  export default {
    name: 'paths',
    components: {
      PathCard
    },
    computed: {
      ...mapState({
        paths: store => store.paths.all
      })
    },
    async fetch({ store, error }) {
      try {
        await store.dispatch('paths/fetchPaths')
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Unable to fetch paths at this time.'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
.card {
  cursor: pointer;
}
</style>
