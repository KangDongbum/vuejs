<template>
    <input type="text" v-focus>
    <div v-redFont>폰트 색상</div>
</template>

<script>
export default {
    directives : {
        alert :{
            mounted(element){
                alert("v-alert");
                element.style.border="1px solid red";
            }
        },
        redFont : {
            mounted(el){
                el.style.color = "red";
            }
        }
    }
}
</script>