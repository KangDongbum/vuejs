<template>
    <h2>{{posts}}</h2>
    <br><br>
    <h2>제목 : {{blog.title}}</h2>
    <br><br>
    <h3>작성자 : {{blog.poster}}</h3>
    <br><br>
    <h2>{{checked}}</h2>
</template>
<script>
export default {
    props:{
        posts:{
            type : Array,
            default(){
                return ["제목1", "제목2"];
            }
        },
        blog:{
            type : Object,
            defalut() {
                return { title : "블로그 제목", pster: "작성명"};
            }
        },
        checked :{
            type : Boolean,
            default : false,
        }
    },
    mounted(){
        console.log(this.posts);
    }
}
</script>