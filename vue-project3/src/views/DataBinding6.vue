<template>
    <img v-bind:src="imgSrc" />
</template>
<script>
export default {
    data() {
        return{
            imgSrc : "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        };
    }
}
</script>