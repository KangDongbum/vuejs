<template>
    <PageTitle title="메인페이지 제목1" :num="10" :bool="false" />
    <page-title title="메인페이지 제목2" v-bind:num="20" v-bind:bool="false" />
    <br>
    <page-title v-bind="pageData" />
    <page-title :title="pageData.title" :num="pageData.num" :bool="pageData.bool" />
    
</template>

<script>
import PageTitle from '../components/PageTitle.vue';
export default {
    components : {PageTitle},
    data() {
        return {
            pageData :{
                title : "메인페이지 제목3",
                num : 30,
                bool : true,
            }
        };
    }
}
</script>