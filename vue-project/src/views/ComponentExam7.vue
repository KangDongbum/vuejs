<template>
    <child-component ref="Child_component" />
    {{ msg2 }}
</template>
<script>
import ChildComponent from "../components/ChildComponent5.vue";
export default {
    components : {ChildComponent},
    computed : {
        msg2() {
            return this.$refs.Child_component.msg;
        }
    }
}
</script>