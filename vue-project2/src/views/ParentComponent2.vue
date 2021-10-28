<template>
    <h1>{{msg}}</h1>
    <ChildComponent2 @send-message="receiveData" />
</template>
<script>
import ChildComponent2 from './ChildComponent2.vue'
export default{
    components : {ChildComponent2},
    data() { return { msg : '',}; },
    methods: { receiveData(data){ this.msg=data; }}
}
</script>