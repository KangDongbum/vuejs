<template>
    <PageTitle><p>페이지제목...</p></PageTitle>
    <LayerPopup>
        <template v-slot:header>
            <h1> 팝업 제목 </h1>
        </template>
        <template v-slot:default>
            <b> 팝업 내용 </b>
        </template>
        <template #footer>
            <h1> 팝업 하단 </h1>
        </template>
    </LayerPopup>
</template>
<script>
import LayerPopup from "../components/LayerPopup";
import PageTitle from "../components/PageTitle2.vue";
export default {
    components : { LayerPopup, PageTitle },

}
</script>