import {reactive} from 'vue'

export const store = reactive({
    counter: 10,
    increase(){
        store.counter++
    },
    decrease(){
        store.counter--
    },
})
