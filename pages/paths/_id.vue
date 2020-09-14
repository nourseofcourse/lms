<template>
  <div>
    {{ path }}
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PathService from '@/services/PathService.js';
  export default {
    computed: {
      ...mapState({
        path: state => state.paths.path
      })
    },
    async fetch({ store, params }) {
      try {
        await store.dispatch('paths/fetchPath', params.id)
      } catch (e) {
        error({
          statusCode: 503,
          message: 'Error fetching path. Please try again later.'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
