<template>
    <div v-bind:style="styleObject">스타일바인딩</div>
    <div v-bind:style="[style1, style2]">스타일 바인딩2</div>
</template>
<script>
export default {
    data(){
        return{
            styleObject:{
                color: "red",
                fontSize: "13px",
            },
            style1 : "background-color: yellow; wudth: 100% height: 200px",
            style2 : "font-size: 20px; font-weight: bold;"
        };
    }
}
</script>
