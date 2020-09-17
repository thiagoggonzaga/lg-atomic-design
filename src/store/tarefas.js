export default {
  state: {
    ultimoId: 2,
    lista: [{
      id: 1,
      titulo: 'Tarefa 1',
      finalizada: false,
    }, {
      id: 2,
      titulo: 'Tarefa 2',
      finalizada: false,
    }],
  },
  actions: {
    adicionar({ commit }, titulo) {
      commit('adicionar', {
        titulo,
        finalizada: false,
      });
    },
    remover({ commit }, tarefa) {
      commit('remover', {
        tarefa,
      });
    },
    finalizar({ commit }, tarefa) {
      commit('finalizar', {
        tarefa,
        finalizada: !tarefa.finalizada,
      });
    },
  },
  mutations: {
    adicionar(state, tarefa) {
      const novaTarefa = {
        ...tarefa,
        id: state.ultimoId + 1,
      };

      state.ultimoId = novaTarefa.id;
      state.lista.push(novaTarefa);
    },
    remover(state, { tarefa }) {
      state.lista.splice(state.lista.indexOf(tarefa), 1);
    },
    finalizar(state, { tarefa, finalizada }) {
      tarefa.finalizada = finalizada; // eslint-disable-line no-param-reassign
    },
  },
};
