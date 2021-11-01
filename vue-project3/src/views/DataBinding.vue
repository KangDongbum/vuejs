<template>
    {{title}}
    <input type="text" v-model="title" />
    <input type="number" v-model.number="num1">
</template>
<script>
export default{
    name : "컴포넌트 이름(생략)",
    components : {},
    data(){
        return{
            title : "제목",
        };
    },
    computed:{

    },
    created(){
        console.log("Created");
    },
    mounted(){
        console.log("Mounted");
    },
    unmounted(){
        console.log("UnMounted");
    }
}
</script>