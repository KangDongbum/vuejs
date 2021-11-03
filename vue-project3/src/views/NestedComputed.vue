<template>
    <PageTitle title="부모 컴포넌트 제목1" 
        :num1="10" :num2="20"
        :checked="true"
        :fruits="['orange', 'banana', 'water melon']"
        :posts="posts"
    />
    <page-title title="부모 컴포넌트 제목2"/>
</template>
<script>
import PageTitle from "../components/pageTitle2.vue"
export default {
    components : {PageTitle},
    data() {
        return {
            posts : { 
                author : "작성자3",
                title : "제목3"
            }
        };
    }
}
</script>