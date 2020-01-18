<template>
  <section>
    <p>{{ message }}</p>
    <p>id: {{ this.$route.params.id }}</p>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      message: 'uses/_id.vueを表示中'
    }
  },
  validate({ params }) {
    return /^\d+$/.test(params.id)
  }
}
</script>

<style>

</style>