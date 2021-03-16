<template lang="pug">
  div
    p Test

    s-checkbox.test(uid="check-1" v-model="checkedValues") Test checkbox 1
    s-checkbox.test(uid="check-2" v-model="checkedValues" value="2") Test checkbox 2
    s-checkbox.test(uid="check-3" v-model="checkedValues" value="3") Test checkbox 3
    s-checkbox.test(class='test test__checkbox' uid='check-4' v-model="testCheckbox")
      span Is it test checkbox?
    p Checked values: {{ checkedValues }}
    p Is checked: {{ testCheckbox }}
    s-checkbox.test(uid="checkbox-default" v-model="testCheckboxDefault")
    p Default checkbox value: {{ testCheckboxDefault }}

    s-radio.test(uid="radio-1" v-model="testRadio" value="1") Radio 1
    s-radio.test(uid="radio-2" v-model="testRadio" value="2") Radio 2
    s-radio.test(uid="radio-3" v-model="testRadio" value="3") Radio 3
    p Radio is {{ testRadio }}
    s-radio.test(uid="radio-default-1" v-model="testRadioDefault" value="1")
    s-radio.test(uid="radio-default-2" v-model="testRadioDefault" value="2")
    p Default radio value: {{ testRadioDefault }}

    s-textfield(
      uid="textfield"
      placeholder="placeholder"
      v-model="testTextfield"
      :error="testTextfield === ''"
    )
      | Textfield name:
      template(v-slot:error)
        | Message about error
    p Text is {{ testTextfield }}
    s-textfield(uid="textfield-default" v-model="testTextfieldDefault")
    p Text of default textfield is {{ testTextfieldDefault }}

    s-button(type="submit") Кнопка
</template>

<script>
import SCheckbox from 'components/SCheckbox';
import SRadio from 'components/SRadio';
import STextfield from 'components/STextfield';
import SButton from 'components/SButton';

export default {
  components: {
    SCheckbox,
    SRadio,
    STextfield,
    SButton,
  },
  data() {
    return {
      checkedValues: ['2'],
      testCheckbox: '1',
      testCheckboxDefault: '',
      testRadio: '1',
      testRadioDefault: '',
      testTextfield: '',
      testTextfieldDefault: '',
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
