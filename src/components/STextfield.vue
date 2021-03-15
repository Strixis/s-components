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
  height: auto
  width: auto
  padding: 0
  box-sizing: border-box
  margin: 0
  &_label
    display: block
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
    color: black
  &_input
    display: block
    height: auto
    width: auto
    padding: 7px 10px
    box-sizing: border-box
    margin: 7px 0
    border: 1px solid black
    border-radius: 0
    outline: none
    font-family: sans-serif
    font-weight: normal
    font-style: normal
    font-size: 16px
    line-height: normal
    letter-spacing: normal
    text-align: left
    text-decoration: none
    color: black
    background: white
    &:hover,
    &:active,
    &:focus
      border: 1px solid green
      outline: none
    &::-webkit-input-placeholder
      color: black
      opacity: 1
    &::-moz-placeholder
      color: black
      opacity: 1
  &_error
    display: block
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
    color: red
</style>
