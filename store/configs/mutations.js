export default {
  SET_API_INFORMATION(state, payload) {
    state.data = payload;
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
};
