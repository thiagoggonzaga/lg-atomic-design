<template>
  <div v-if="lista.length > 0">
    <lg-card-action
      v-for="item in itensPaginados"
      :key="item[attrChave]"
      :descricao="item[attrDescricao]"
      @click="$listeners.click(item)"
    />

    <p-paginator
      v-show="lista.length > itensPorPagina"
      :rows="itensPorPagina"
      :totalRecords="lista.length"
      @page="onPage($event)"
    ></p-paginator>
  </div>
  <div v-else>
    <p-card class="p-shadow-2 p-mb-1">
      <template #content>
        <p class="p-text-center p-text-light">{{ listaVazia }}</p>
      </template>
    </p-card>
  </div>
</template>

<script>
export default {
  name: 'lg-list-card',
  props: {
    lista: {
      type: Array,
      default: () => [],
    },
    listaVazia: {
      type: String,
      default: 'Nenhum item para listar',
    },
    attrChave: {
      type: String,
      default: 'id',
    },
    attrDescricao: {
      type: String,
      default: 'descricao',
    },
  },
  methods: {
    onPage(event) {
      this.paginaAtual = event.page;
    },
  },
  computed: {
    itensPaginados() {
      const start = this.itensPorPagina * this.paginaAtual;
      const end = start + this.itensPorPagina;

      return this.lista.slice(start, end);
    },
    itensPorPagina() {
      return this.$store.state.configuracao.itensPorPagina;
    },
  },
  data() {
    return {
      paginaAtual: 0,
    };
  },
};
</script>
