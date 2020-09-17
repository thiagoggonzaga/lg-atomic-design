<template>
  <div class="p-fluid">
    <div class="p-col-12">
      <h1 class="p-text-center p-text-nowrap p-text-truncate">Configurações</h1>
    </div>
    <div class="p-offset-1 p-col-10 p-md-offset-3 p-md-6">
      <span class="p-float-label">
        <p-input-text v-model.number="numRegistrosPorPagina" @change="atualizar" />
        <label for="inputtext">Registros por página</label>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numRegistrosPorPagina: this.$store.state.configuracao.itensPorPagina,
    };
  },
  methods: {
    atualizar() {
      if (this.numRegistrosPorPagina && this.numRegistrosPorPagina > 0) {
        this.$store.dispatch('configuracao/atualizar', this.numRegistrosPorPagina);
      }
    },
  },
};
</script>
