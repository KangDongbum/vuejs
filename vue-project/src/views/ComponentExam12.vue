<template>
    {{ count }}
    <button type="button" @click="increment">증가</button>
</template>
<script>
export default {
   /* data() {
        return {
            count : this.$store.state.count,
        };
    },*/
    computed : {
        count() {
            return this.$store.state.count;
        }
    },
    methods : {
        increment() {
            this.$store.commit("increment");
        }
    }
}
</script>