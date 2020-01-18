<template>
  <div>
    error!!
    <h1 v-if="error.statusCode ===  404">404</h1>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>