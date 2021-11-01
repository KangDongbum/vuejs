<script>
export default{
    mixins : [commonLib],
    created(){
        console.log("created");
    },
    mounted(){
        console.log("mounted");
    },
    unmounted(){
        console.log("unmounted");
    }
}
</script>