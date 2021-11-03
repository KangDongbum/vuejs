<template>
    <input type="number" v-model="num1" /> +
    <input type="number" v-model="num2" /> =
    {{ state.result }}
</template>
<script>
import calculator from "../calculator.js"
export default {
    setup(){
    
        /*
        function calcu(){
            state.result = state.num1+state.num2;
        }
        */

        let{num1, num2, result} = calculator();
        return {
            num1,
            num2,
            result
        }
    }
}
</script>