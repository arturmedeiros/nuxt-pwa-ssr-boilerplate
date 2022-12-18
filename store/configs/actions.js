export default {
  getApiInformation(context, payload){
    this.$axios.get("/").then(response => {
      context.commit('SET_API_INFORMATION', response.data)
      console.log('SET_API_INFORMATION', response.data)
    })
  }
};
