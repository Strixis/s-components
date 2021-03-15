<template lang="pug">
  .s-checkbox
    label.s-checkbox_label
      input.s-checkbox_input(
        type="checkbox"
        :id="uid"
        :checked="isChecked"
        :value="value"
        @change="updateInput"
      )
      span.s-checkbox_marker(:class="{'s-checkbox_marker__checked': isChecked}")
      slot Default slot
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
    },
    modelValue: {
      default: false,
    },
    trueValue: {
      default: true,
    },
    falseValue: {
      default: false,
    },
  },
  methods: {
    updateInput(event) {
      let checked = event.target.checked;

      if (Array.isArray(this.modelValue)) {
        let newValue = [...this.modelValue];

        checked ? newValue.push(this.value) : newValue.splice(newValue.indexOf(this.value), 1);

        this.$emit('change', newValue);
      } else {
        this.$emit('change', checked ? this.trueValue : this.falseValue);
      };
    }
  },
  computed: {
    isChecked() {
      if (Array.isArray(this.modelValue)) return this.modelValue.includes(this.value);
      return this.modelValue === this.trueValue;
    }
  }
}
</script>

<style lang="sass">
.s-checkbox
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
    color: black
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
  &_label:hover &_marker,
  &_input:active ~ &_marker,
  &_input:focus ~ &_marker
    border: 1px solid green
    outline: none
</style>
