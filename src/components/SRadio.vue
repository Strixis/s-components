<template lang="pug">
  .s-radio
    label.s-radio_label
      input.s-radio_input(
        type="radio"
        :id="uid"
        :checked="isChecked"
        :value="value"
        @change="updateInput"
      )
      span.s-radio_marker(:class="{'s-radio_marker__checked': isChecked}")
      <slot>radio</slot>
</template>

<script>
export default {
  model: {
    prop: 'modelValue',
    event: 'change',
  },
  props: {
    uid: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    modelValue: {
      default: '',
    },
  },
  methods: {
    updateInput() {
      this.$emit('change', this.value);
    },
  },
  computed: {
    isChecked() {
      return this.modelValue === this.value;
    },
  },
}
</script>

<style lang="sass">
.s-radio
  display: block
  height: auto
  width: auto
  padding: 0
  box-sizing: border-box
  margin: 0
  position: relative
  &_label
    display: flex
    align-items: center
    padding: 0
    box-sizing: border-box
    margin: 0
    font-family: sans-serif
    font-weight: normal
    font-style: normal
    font-size: 16px
    line-height: normal
    letter-spacing: normal
    text-align: left
    text-decoration: none
  &_input
    opacity: 0
    position: absolute
    z-index: -1
  &_marker
    display: block
    width: 24px
    height: 24px
    padding: 0
    box-sizing: border-box
    margin: 0 7px 0 0
    border: 1px solid black
    border-radius: 0
    outline: none
    background: white
    &__checked
      background: red
</style>
