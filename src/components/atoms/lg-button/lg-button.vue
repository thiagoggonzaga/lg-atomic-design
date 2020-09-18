<template>
  <p-button
    v-on="$listeners"
    :icon="loading ? 'pi pi-spin pi-spinner' : icon"
    :iconPos="iconPos"
    :disabled="disabled"
    :label="!loading ? label : ''"
    :style="{ 'width': block ? '100%' : '' }"
    :badge="badge"
    :badgeClass="badgeClass"
  />
</template>

<script>
import Button from 'primevue/button';

export default {
  name: 'lg-button',
  components: {
    'p-button': Button,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    iconPos: {
      type: String,
      default: 'left',
    },
    badge: {
      type: String,
      default: null,
    },
    badgeClass: {
      type: String,
      default: null,
    },
  },
};
</script>
