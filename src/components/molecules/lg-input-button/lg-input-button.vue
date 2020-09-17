<template>
  <div class="p-fluid p-grid">
    <div class="p-field p-col-12 p-sm-10">
      <span class="p-float-label">
        <p-input-text id="input" v-model="model" @keyup.enter="$listeners.click" type="text" />
        <label for="input">{{ $attrs.placeholder }}</label>
      </span>
    </div>
    <div class="p-field p-col-12 p-sm-2">
      <lg-button :label="label" @click="$listeners.click" :disabled="disabledButton" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'lg-input-button',
  props: {
    value: {
      type: String || Number,
      default: '',
    },
    label: {
      type: String,
      default: 'OK',
    },
    disabledButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      model: this.value,
    };
  },
  watch: {
    model(newValue) {
      this.$emit('input', newValue);
    },
    value(newValue) {
      this.model = newValue;
    },
  },
};
</script>

<style>
</style>
