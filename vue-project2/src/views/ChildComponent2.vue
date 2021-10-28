<script>
export default{
    data(){ return { msg: '자식 컴포넌트 메세지'}; },
    mounted(){ this.$emit("send-message", this.msg); }
}
// this.$emit('send-message', 데이터)
</script>