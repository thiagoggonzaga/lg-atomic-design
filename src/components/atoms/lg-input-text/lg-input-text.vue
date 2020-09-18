<template>
  <input type="text" v-on="listeners" :value="value" />
</template>

<script>
export default {
  name: 'lg-input-text',
  props: {
    value: null,
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: (event) => this.$emit('input', event.target.value),
      };
    },
  },
};
</script>
