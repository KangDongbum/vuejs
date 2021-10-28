<template>
    <PageTitle :title="title" />
    <Calculator :num1="10" :num2="20" opr="*" />
    <Props :posts="[1,2,3,4]" 
        :blog="{title : blog.title, poster : blog.poster}"
        :checked="true"
    />
    <Props :blog="blog"/>
</template>
<script>
import PageTitle from "../components/PageTitle.vue"
import Calculator from '../components/Calc.vue'
import Props from '../components/Props.vue'
export default{
    components : {PageTitle, Calculator, Props},
    data(){
        return{
            title:"변경된 제목...",
            blog : {title:"(변경)제목", poster : "(변경)작성자"},
        };
    }
}
</script>