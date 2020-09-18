import http from './http';

class ServicoDeTarefas {
  static obterTarefas() {
    return new Promise((resolve) => {
      http.get('/tasks').then((response) => {
        if (response.data.length > 0) {
          resolve(response.data.map((obj) => ({
            id: obj.id,
            titulo: obj.content,
          })));
        } else {
          resolve([]);
        }
      });
    });
  }

  static novaTarefa(tarefa) {
    return new Promise((resolve) => {
      http.post('/tasks', {
        content: tarefa,
      }).then((response) => {
        if (response.status === 200) {
          resolve({
            id: response.data.id,
            titulo: response.data.content,
          });
        }
      });
    });
  }

  static remover(id) {
    return new Promise((resolve) => {
      http.delete(`/tasks/${id}`).then((response) => {
        resolve(response.status === 200 || response.status === 204);
      });
    });
  }
}

export default ServicoDeTarefas;
