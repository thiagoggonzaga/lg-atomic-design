<template>
  <div class="p-fluid">
    <div class="p-col-12">
      <h1 class="p-text-center p-text-nowrap p-text-truncate">{{ $t('titulo') }}</h1>
    </div>
    <div class="p-offset-1 p-col-10 p-md-offset-3 p-md-6">
      <lg-input-button
        v-model="titulo"
        :disabled-button="!titulo || loading"
        @click="adicionar"
        placeholder="Título da tarefa"
      />
    </div>
    <div class="p-offset-1 p-col-10 p-md-offset-3 p-md-6">
      <p-block-ui :blocked="loading">
        <lg-list-card
          @click="remover($event)"
          :lista="lista"
          attrDescricao="titulo"
          listaVazia="Você não tem tarefas"
        />
      </p-block-ui>
    </div>
  </div>
</template>

<script>
import servicoTarefas from '@/services/tarefas';

export default {
  data() {
    return {
      titulo: '',
      lista: [],
      loading: false,
    };
  },
  methods: {
    adicionar() {
      if (this.titulo) {
        this.loading = true;

        servicoTarefas.novaTarefa(this.titulo).then((novaTarefa) => {
          if (novaTarefa.id) {
            this.titulo = '';
            this.loading = false;

            this.lista.push(novaTarefa);

            this.$toast.removeAllGroups();
            this.$toast.add({ severity: 'success', detail: 'Tarefa adicionada!', life: 2000 });
          } else {
            this.loading = false;
          }
        });
      }
    },
    remover(tarefa) {
      this.loading = true;

      servicoTarefas.remover(tarefa.id).then((sucesso) => {
        if (sucesso) {
          this.loading = false;

          // remove da lista local
          this.lista.splice(this.lista.indexOf(tarefa), 1);

          this.$toast.removeAllGroups();
          this.$toast.add({ severity: 'error', detail: 'Tarefa removida!', life: 2000 });
        }
      });
    },
    $_carregueTarefas() {
      this.loading = true;

      servicoTarefas.obterTarefas().then((lista) => {
        this.lista = lista;
        this.loading = false;
      });
    },
  },
  mounted() {
    this.$_carregueTarefas();
  },
};
</script>

<style>
</style>
