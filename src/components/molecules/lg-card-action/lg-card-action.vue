<template>
  <div class="p-card p-shadow-2 p-d-flex p-p-3 p-mb-2">
    <i class="pi pi-check p-as-center p-mr-2"></i>
    <div class="p-as-center">{{ descricao }}</div>
    <lg-button icon="pi pi-trash" class="p-ml-auto p-button-danger" @click="$listeners.click" />
  </div>
</template>

<script>
export default {
  name: 'lg-card-action',
  props: {
    descricao: {
      type: String || Number,
      default: '',
    },
  },
};
</script>

<style>
</style>
