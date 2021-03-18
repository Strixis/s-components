<template lang="pug">
  s-container
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

    s-button.test(type="link" buttonEvent="click", :event="increaseTestButtonValue")
    s-button.test(buttonEvent="click" :event="decreaseTestButtonValue")
    p Test button value: {{ testButtonValue }}

    s-slider(:slides="3")
      .slide(v-for="(slide, index) in ['1', '2', '3']" :key="index")
        p Slide {{ slide }}
</template>

<script>
import SCheckbox from 'components/SCheckbox';
import SRadio from 'components/SRadio';
import STextfield from 'components/STextfield';
import SButton from 'components/SButton';
import SContainer from 'components/SContainer';
import SSlider from 'components/SSlider';

export default {
  components: {
    SCheckbox,
    SRadio,
    STextfield,
    SButton,
    SContainer,
    SSlider,
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
      testButtonValue: 0,
    };
  },
  methods: {
    increaseTestButtonValue(event) {
      this.testButtonValue++;
      event.preventDefault();
    },
    decreaseTestButtonValue(event) {
      this.testButtonValue--;
      event.preventDefault();
    },
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
.s-button
  border: 2px solid green
.slide
  width: 100%
  border: 2px solid black
</style>
