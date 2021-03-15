<template lang="pug">
  div
    p Test
    s-checkbox.test(uid="check-1" v-model="checkedValues") Test checkbox 1
    s-checkbox.test(uid="check-2" v-model="checkedValues" value="2") Test checkbox 2
    s-checkbox.test(uid="check-3" v-model="checkedValues" value="3") Test checkbox 3
    s-checkbox(class='test test__checkbox' uid='check-4' v-model="testCheckbox")
      span Is it test checkbox?
    p Checked values: {{ checkedValues }}
    p Is checked: {{ testCheckbox }}

    s-radio(uid="radio-1" v-model="testRadio" value="1") Radio 1
    s-radio(uid="radio-2" v-model="testRadio" value="2") Radio 2
    s-radio(uid="radio-3" v-model="testRadio" value="3") Radio 3
    p Radio is {{ testRadio }}
</template>

<script>
import SCheckbox from 'components/SCheckbox';
import SRadio from 'components/SRadio';

export default {
  components: {
    SCheckbox,
    SRadio,
  },
  data() {
    return {
      checkedValues: [],
      testCheckbox: '',
      testRadio: '',
    };
  },
}
</script>

<style lang="sass">
.test
  margin: 0 0 7px 0
.s-checkbox_marker__checked
  background: green
.test__checkbox .s-checkbox_marker__checked
  background: blue
</style>
