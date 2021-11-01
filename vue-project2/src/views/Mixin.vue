<script>
import commonLib from "../lib/common.js"
export default{
    mixins : [commonLib],
    mounted(){
        console.log(this.getData);
    },
    methods :{
        async detData(){
            return await this.$httpRequest("http://localhost:3000");
        }
    }
}
</script>