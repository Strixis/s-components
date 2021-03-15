<template lang="pug">
  .s-textfield
    label.s-textfield_label(:for="uid")
      slot Default slot
    input.s-textfield_input(
      type="text"
      :id="uid"
      :placeholder="placeholder"
      :value="value"
      @input="updateInput"
    )
    .s-textfield_error(v-if="error")
      slot(name='error') Slot name error
</template>

<script>
export default {
  props: {
    uid: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
    value: {
      type: String,
    },
    error: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    updateInput(event) {
      this.$emit('input', event.target.value);
    },
  },
}
</script>

<style lang="sass">
.s-textfield
  display: flex
  flex-direction: column
  align-items: flex-start
</style>
