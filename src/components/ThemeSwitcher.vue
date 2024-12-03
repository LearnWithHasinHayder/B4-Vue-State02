<script setup>
 import {theme} from '../data/theme.js'
 function updateTheme(value){
    theme.bgColor = value
    theme.textColor = value
    theme.buttonColor = value
    theme.buttonTextColor = value
    //save in local storage
    localStorage.setItem('theme', JSON.stringify(theme))
 }
</script>
 
<template>
    <h2>Theme Switcher Select Dropdown</h2>
    <select @change="updateTheme($event.target.value)">
        <option value="gray">Gray</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
    </select>
    
</template>
 
<style scoped>
 
</style>