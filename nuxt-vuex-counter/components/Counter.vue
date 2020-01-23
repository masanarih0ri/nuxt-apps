<template>
  <div class="contents">
    <h2>{{ title }}</h2>
    <div class="counter">
      count:{{$store.state.counter}}
    </div>
    <button @click="$store.commit('counter/countUp')">+1</button>
    <button @click="$store.commit('counter/resetCount')">reset</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      title: 'counter'
    }
  }
}
</script>