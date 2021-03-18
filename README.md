# s-components

## Компоненты:
1. [Чекбокс](#checkbox)
2. [Радиокнопка](#radio)
3. [Текстовое поле ввода](#textfield)
4. [Кнопка](#button)
5. [Контейнер](#container)

### Использование:
* ***<a name="checkbox">Чекбокс</a>***

[Ссылка](./src/components/SCheckbox.vue)

Props:
- uid - string, required
- value - string
  
Slots:
- default - слот внутри label для описания чекбокса
  
Classes:
- s-checkbox - контейнер
- s-checkbox_label - метка с текстом или иным содержимым
- s-checkbox_input - скрытый нативный чекбокс
- s-checkbox_marker - видимая замена чекбокса
- s-checkbox_marker__checked - вид чекбокса когда он выбран

Пример:
```
<template lang="pug">
  s-checkbox(uid="id" v-model="checkbox") Test checkbox
</template>

<script>
import SCheckbox from 'yourfolder/SCheckbox'
export default {
  components: {
    SCheckbox,
  },
  data() {
    return {
      checkbox: '',
    };
  },
}
</script>

<style lang="sass">
.s-checkbox_marker__checked
  background: blue
<style>
```

* ***<a name="radio">Радиокнопка</a>***

[Ссылка](./src/components/SRadio.vue)

Props:
- uid - string, required
- value - string, required
  
Slots:
- default - слот внутри label для описания радиокнопки
  
Classes:
- s-radio - контейнер
- s-radio_label - метка с текстом или иным содержимым
- s-radio_input - скрытая нативная радиокнопка
- s-radio_marker - видимая замена радиокнопки
- s-radio_marker__checked - вид радиокнопки когда она выбрана

Пример:
```
<template lang="pug">
  s-radio(uid="id-1" v-model="radio" value="1") Test radio 1
  s-radio(uid="id-2" v-model="radio" value="2") Test radio 2
</template>

<script>
import SRadio from 'yourfolder/SRadio'
export default {
  components: {
    SRadio,
  },
  data() {
    return {
      radio: '',
    };
  },
}
</script>

<style lang="sass">
.s-radio_marker__checked
  background: green
<style>
```

* ***<a name="button">Кнопка</a>***

[Ссылка](./src/components/SButton.vue)

Props:
- type - string, может быть {'button' - для кнопки, 'link' - для ссылки, 'submit' - для input(type="submit")}
- url - string
- buttonEvent - string
- event - function
  
Slots:
- default - слот для описания кнопки
  
Classes:
- s-button - контейнер
- s-button_label - контейнер для кнопки если выбран тип 'submit'
- s-button_input - скрытый нативный input(type="submit")

Пример:
```
<template lang="pug">
  s-button.test(
    buttonEvent="click"
    :event="increaseTestButtonValue"
  )
  p Button value: {{ buttonValue }}
</template>

<script>
import SButton from 'yourfolder/SButton'
export default {
  components: {
    SButton,
  },
  data() {
    return {
      buttonValue: '',
    };
  },
   methods: {
    increaseTestButtonValue(event) {
      this.testButtonValue++;
    },
  },
}
</script>

<style lang="sass">
.s-button
  border: 2px solid green
<style>
```

* ***<a name="container">Чекбокс</a>***

[Ссылка](./src/components/SContainer.vue)
Slots:
- default - слот для контента
  
Classes:
- s-container - контейнер

Пример:
```
<template lang="pug">
  s-container
    img(src="#" alt="img")
    p Там выше картинка.
    div
      p Правда-правда. А ниже ссылка.
      a(href="#") Это ссылка
</template>

<style lang="sass">
.s-container
  background: whitesmoke
<style>
```
