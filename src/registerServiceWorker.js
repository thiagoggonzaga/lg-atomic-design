/* eslint-disable no-console */

import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log('App está utilizando um Service Worker.');
    },
    registered() {
      console.log('Service Worker registrado c/ sucesso.');
    },
    cached() {
      console.log('Conteúdo adicionado p/ uso offline.');
    },
    updatefound() {
      console.log('Novo conteúdo baixado.');
    },
    updated() {
      console.log('Novo conteúdo encontrado. Atualize a página.');
    },
    offline() {
      console.log('Nenhuma conexão encontrada. Aplicação executando Offline!');
    },
    error(error) {
      console.error('Erro ao tentar registrar o Service Worker:', error);
    },
  });
}
