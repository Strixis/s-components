# s-components

## Компоненты:
1. [Чекбокс](#checkbox)
2. [Радиокнопка](#radio)
3. [Текстовое поле ввода](#textfield)

### Использование:
* <a name="checkbox">Чекбокс</a>

Props:
  | uid - string, required
  | value - string
Slots:
  | default - слот внутри label для описания чекбокса
Classes:
  | s-checkbox - контейнер
  | s-checkbox_label - метка с текстом или иным содержимым
  | s-checkbox_input - скрытый нативный чекбокс
  | s-checkbox_marker - видимая замена чекбокса
  | s-checkbox_marker__checked - вид чекбокса когда он выбран

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

* <a name="radio">Радиокнопка</a>

Props:
  | uid - string, required
  | value - string, required
Slots:
  | default - слот внутри label для описания радиокнопки
Classes:
  | s-radio - контейнер
  | s-radio_label - метка с текстом или иным содержимым
  | s-radio_input - скрытая нативная радиокнопка
  | s-radio_marker - видимая замена радиокнопки
  | s-radio_marker__checked - вид радиокнопки когда она выбрана

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

* <a name="textfield">Текстовое поле</a>

Props:
  | uid - string, required
  | placeholder - string
  | error - boolean
Slots:
  | default - слот внутри label для описания текстового поля
  | error - слот после input внутри обертки error для описания ошибки  
Classes:
  | s-textfield - контейнер
  | s-textfield_label - метка с текстом или иным содержимым
  | s-textfield_input - скрытый нативный чекбокс
  | s-textfield_error - контейнер с текстом или иным содержимым для описания ошибки

Пример:
```
<template lang="pug">
  s-textfield(
    uid="id"
    v-model="textfield"
    paceholder="Placeholder for textfield"
    :error="textfield === ''"
  )
</template>

<script>
import STextfield from 'yourfolder/STextfield'
export default {
  components: {
    STextfield,
  },
  data() {
    return {
      textfield: '',
    };
  },
}
</script>

<style lang="sass">
.s-textfield_error
  color: red
<style>
```
