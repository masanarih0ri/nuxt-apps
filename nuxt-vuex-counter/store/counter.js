export const state = () => ({
  counter: 0
})

export const mutations = {
  countUp: function(state) {
    state.counter++
   },
   resetCount: function(state) {
     state.counter = 0
   }
}

// export const actions = {
//   counterUpAction(context) {
//     context.commit('countUp')
//   }
// }