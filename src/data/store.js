import {defineStore} from 'pinia'
import {ref} from 'vue'

export const useStore = defineStore('main', ()=>{
    const counter = ref(10)
    function increase(){
        counter.value++
    }
    function decrease(){
        counter.value--
    }
    return {counter, increase, decrease}
})