<script setup>
import { onMounted } from 'vue'
import { theme } from './data/theme.js'
import ThemeSwitcher from './components/ThemeSwitcher.vue';
// import {useStore} from './data/store.js'
// const store =   useStore()

import {store} from './data/normalstore.js'
//mounted
onMounted(() => {
  //get from local storage
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    // Object.assign(theme, JSON.parse(savedTheme))
    const parsedTheme = JSON.parse(savedTheme)
    theme.bgColor = parsedTheme.bgColor
    theme.textColor = parsedTheme.textColor
    theme.buttonColor = parsedTheme.buttonColor
    theme.buttonTextColor = parsedTheme.buttonTextColor
  }
})
</script>

<template>
  <div class="mt-2">
    <ThemeSwitcher />
  </div>
  <div class="container mt-5">
    <div class="width-[600px] height-[300px] p-10" :class="[
      `bg-${theme.bgColor}-500`,
      `text-${theme.textColor}-100`
    ]">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit maxime dolore accusamus at repellendus cupiditate quaerat sapiente nobis aperiam quod.
    </div>
    <p class="mt-5" :class="`text-${theme.bgColor}-800`">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, recusandae. Suscipit, alias sit? Ullam culpa veniam impedit eaque omnis error?
    </p>
    <button class="mt-10 font-bold py-2 px-4 rounded" :class="`bg-${theme.buttonColor}-500 hover:bg-${theme.buttonColor}-700 text-${theme.buttonTextColor}-100 `">
      Button
    </button>
  </div>
  <div class="mt-10">
    Store Value: {{store.counter}}
    <button @click="store.increase()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      ++
    </button>
    <button @click="store.decrease()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      --
    </button>
  </div>

</template>

<style scoped></style>