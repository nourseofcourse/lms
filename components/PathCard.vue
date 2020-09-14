<template>
  <nuxt-link
    class="card-link"
    :to="'/paths/' + path.id">
    <div
      class="max-w-sm rounded overflow-hidden shadow-lg  card">
      <img class="w-full" :src="path.image" :alt="path.name">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ path.name }}</div>
        <p class="text-gray-700 text-base">
          {{ path.description }}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
      </div>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    props: ['path']
  }
</script>

<style lang="scss" scoped>

</style>
