<template>
    <ChildComponent ref="child_component" @click="msg()" />
    <button type="button" ref="button1" @click="msg()">클릭2</button>
    <h1>{{title}}</h1>
</template>
<script>
import ChildComponent from './ChildComponent.vue'
export default {
    components : {ChildComponent},
    computed : { titile(){ return this.$refs.child_component.msg; }},
    mounted(){ this.$refs.button1.click(); },
    methods:{msg(){alert("클릭!");} }
}
</script>