<template>
    <div>
        <label>
            <input type='radio' v-bind:value="radioValue1" v-model="picked">
            {{ radioValue1 }}
        </label>
        <label>
            <input type='radio' v-bind:value="radioValue2" v-model="picked">
            {{ radioValue2 }}
        </label>
        <label>
            <input type='radio' v-bind:value="radioValue3" v-model="picked">
            {{ radioValue3 }}
        </label> 
        <div>{{ picked }}</div>
        <br><br>
        <div>
            <img v-bind:src="logoImg" />
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            picked : '',
            radioValue1 : "서울",
            radioValue2 : "인천",
            radioValue3 : "제주",
            logoImg : "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        };
    }
}
</script>
