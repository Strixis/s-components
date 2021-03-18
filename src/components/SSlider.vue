<template lang="pug">
  .s-slider
    .s-slider_tape(ref="tape")
      slot
    .s-slider_controls
      .s-slider_control.s-slider_control__left(@click="switchSlide")
      .s-slider_control.s-slider_control__right(@click="switchSlide")
</template>

<script>
export default {
  props: {
    slides: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      slide: 0,
    };
  },
  methods: {
    switchSlide(event) {
      if (event.target.classList.contains('s-slider_control__right')) {
        this.slide = (this.slide + 1 === this.slides) ? 0 : this.slide + 1;
        this.$refs.tape.style.marginLeft = `${-this.slide * 100}%`;
      } else if (event.target.classList.contains('s-slider_control__left')) {
        this.slide = (this.slide - 1 < 0) ? this.slides - 1 : this.slide - 1;
        this.$refs.tape.style.marginLeft = `${-this.slide * 100}%`;
      };
    },
  },
  mounted() {
    this.$refs.tape.style.width =`${this.slides * 100}%`;
  },
}
</script>

<style lang="sass">
.s-slider
  display: block
  height: 200px
  width: auto
  overflow: hidden
  padding: 0
  box-sizing: border-box
  margin: 0
  background: white
  position: relative
  &_tape
    display: flex
    height: 100%
    width: auto
    overflow: auto
    padding: 0
    box-sizing: border-box
    margin: 0
    background: whitesmoke
    position: absolute
  &_controls
    display: flex
    align-items: center
    justify-content: space-between
    height: auto
    width: 100%
    overflow: auto
    padding: 0
    box-sizing: border-box
    margin: 0
    background: transparent
    position: absolute
    bottom: 0
  &_control
    display: block
    height: auto
    width: auto
    overflow: auto
    padding: 11px
    box-sizing: border-box
    margin: 0
    background: white
    font-family: sans-serif
    font-weight: normal
    font-style: normal
    font-size: 16px
    line-height: normal
    letter-spacing: normal
    text-align: left
    text-decoration: none
    color: black
    border: 2px solid black
    border-radius: 0
    &__left::after
      content: "Prev"
    &__right::after
      content: "Next"
</style>
