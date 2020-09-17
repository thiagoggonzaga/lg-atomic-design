export default {
  state: {
    itensPorPagina: 5,
  },
  actions: {
    atualizar({ commit }, novoValor) {
      commit('atualizar', novoValor);
    },
  },
  mutations: {
    atualizar(state, novoValor) {
      state.itensPorPagina = novoValor;
    },
  },
};
