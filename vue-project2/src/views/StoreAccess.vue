<template>
    <h1>count : {{count}}</h1>
    <button @click='increment'>증가</button>
</template>
<script>
export default{
    computed:{
        count(){
            return this.$store.state.count;
        }
    },
    mounted(){
        console.log(this.$store.state.count);
    },
    methods : {
        increment(){
            //this.$store.state.count++;
            this.$store.commit('increment');
        }
    }
}
</script>