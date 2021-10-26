<template>
    <h1>Hello, {{title}}</h1>
    <h1>{{htmlString}}</h1>
    <h1 v-html="htmlString" />
</template>
<script>
export default{
    data(){
        return{
            title : "World",
            htmlString : "<p style='color: red;'>HTML 문구...</p>"
        };
    }
}
</script>