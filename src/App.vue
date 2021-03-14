<template lang="pug">
  div
    p Test
    s-checkbox.test-checkbox(uid='1' v-model="checkedValues" value="1") Test checkbox 1
    s-checkbox.test-checkbox(uid='2' v-model="checkedValues" value="2") Test checkbox 2
    s-checkbox.test-checkbox(uid='3' v-model="checkedValues" value="3") Test checkbox 3
    s-checkbox(class='test-checkbox test-checkbox__another' uid='test' v-model="testCheckbox")
      span Is it test checkbox?
    p Checked values: {{ checkedValues }}
    p Is checked: {{ testCheckbox }}
</template>

<script>
import SCheckbox from 'components/SCheckbox';

export default {
  components: {
    SCheckbox,
  },
  data() {
    return {
      checkedValues: [],
      testCheckbox: '',
    };
  },
}
</script>

<style lang="sass">
.test-checkbox
  margin: 0 0 7px 0
.s-checkbox_marker__checked
  background: green
.test-checkbox__another .s-checkbox_marker__checked
  background: blue
</style>
