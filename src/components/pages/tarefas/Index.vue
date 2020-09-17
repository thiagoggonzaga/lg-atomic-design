<template>
  <div class="p-fluid">
    <div class="p-col-12">
      <h1 class="p-text-center p-text-nowrap p-text-truncate">{{ $t('titulo') }}</h1>
    </div>
    <div class="p-offset-1 p-col-10 p-md-offset-3 p-md-6">
      <lg-input-button
        v-model="titulo"
        :disabled-button="!titulo"
        @click="adicionar"
        placeholder="Título da tarefa"
      />
    </div>
    <div class="p-offset-1 p-col-10 p-md-offset-3 p-md-6">
      <keep-alive>
        <lg-list-card
          @click="remover($event)"
          :lista="$store.state.tarefas.lista"
          attrDescricao="titulo"
          listaVazia="Você não tem tarefas"
        />
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: '',
    };
  },
  methods: {
    adicionar() {
      if (this.titulo) {
        this.$store.dispatch('tarefas/adicionar', this.titulo);
        this.titulo = '';

        this.$toast.removeAllGroups();
        this.$toast.add({ severity: 'success', detail: 'Tarefa adicionada!', life: 2000 });
      }
    },
    remover(tarefa) {
      this.$store.dispatch('tarefas/remover', tarefa);

      this.$toast.removeAllGroups();
      this.$toast.add({ severity: 'error', detail: 'Tarefa removida!', life: 2000 });
    },
  },
};
</script>

<style>
</style>
