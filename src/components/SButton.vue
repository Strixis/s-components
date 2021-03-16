<template lang="pug">
    button.s-button(v-if="type === 'button'" @[buttonEvent]="event")
      slot Button
    a.s-button(:href="url" v-else-if="type === 'link'" @[buttonEvent]="event")
      slot Button
    label.s-button_label(v-else-if="type === 'submit'")
      input.s-button_input(type="submit" @[buttonEvent]="event")
      span.s-button
        slot Button
    div.s-button(v-else @[buttonEvent]="event")
      slot Button
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
    url: {
      type: String,
      default: '#',
    },
    buttonEvent: {
      type: String,
    },
    event: {
      type: Function,
    },
  },
}
</script>

<style lang="sass">
.s-button
  display: block
  width: 100px
  height: auto
  padding: 7px
  box-sizing: border-box
  margin: 0
  background: white
  border: 1px solid black
  border-radius: 0
  outline: none
  font-family: sans-serif
  font-weight: normal
  font-style: normal
  font-size: 16px
  line-height: normal
  letter-spacing: normal
  text-align: center
  text-decoration: none
  color: black
  position: relative
  &:focus
    background: whitesmoke
    outline: none
    border: 1px solid black
  &:hover
    background: grey
    outline: none
    border: 1px solid black
    cursor: pointer
  &:active
    background: white
    outline: none
    border: 1px solid black
  &:hover,
  &:focus,
  &:active
    outline: none
    border: 1px solid black
  &_label
    display: block
    width: max-content
  &_input
    position: absolute
    opacity: 0
    z-index: -1
    &:focus + .s-button
      background: whitesmoke
      outline: none
      border: 1px solid black
    &:hover + .s-button
      background: grey
      outline: none
      border: 1px solid black
      cursor: pointer
    &:active + .s-button
      background: white
      outline: none
      border: 1px solid black
    &:hover + .s-button,
    &:focus + .s-button,
    &:active + .s-button
      outline: none
      border: 1px solid black

</style>
