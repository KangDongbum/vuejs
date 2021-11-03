<template>
    <button type="button" @click='msg'>확인</button>
</template>
<script>
export default{
    data(){
        return {
            message : "테스트 메세지!",
        };
    },
    methods : {
        msg() {
            alert(this.message);
        }
    },
    mounted(){
        this.$emit("send-data", this.message);
    }
}
</script>