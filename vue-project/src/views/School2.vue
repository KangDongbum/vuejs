<template>
    <input type='checkbox' name='hobby' v-model='checked' v-bind:value="check1Value">{{ check1Value }}
    <input type='checkbox' name='hobby' v-model='checked' :value="check2Value">{{ check2Value }}
    <input type='checkbox' name='hobby' v-model='checked' value="조깅">조깅
    <input type='checkbox' name='hobby' v-model='checked' value="자전거">자전거
    
    <div>{{ checked }}</div>

    <input type='radio' name='city' v-model='checked2' v-bind:value='city1'>{{ city1 }}
    <input type='radio' name='city' v-model='checked2' :value='city2'>{{ city2 }}
    <input type='radio' name='city' v-model='checked2' value='경기'>경기
    <input type='radio' name='city' v-model='checked2' value='부산'>부산

    <div>{{ checked2 }}</div>

    <textarea v-model='textValue'></textarea>> <!-- value 속성 -->

    <br>
    <select v-model='selectedCity' >
        <option value='인천'>인천</option>
        <option value='서울'>서울</option>
        <option value='부산'>부산</option>
    </select>

    <br>
    <a v-bind:href='href1'>네이버</a>
    <a :href='href2'>다음</a>

    <br>
    <img :src='imageSrc'>

    <br>
    <input type ='text' v-bind:readonly='textReadOnly'>

    <br>
    <button type='button' v-bind:disabled='buttonDisabled'>버튼</button>

    <br>
    <input type='text' name='title' v-model='textTitle'>
    <button type='button' v-bind:disabled='textTitle==""'>버튼</button>

    <br>
    <div class='class1' v-bind:class="{ 'on' : isActive, 'error' : isError }">1234</div>
    
    <br>
    <div class='class1' v-bind:class="[class2, class3]">5678</div>

    <br>
    <div v-bind:style='styleObject'>123456</div>
    <div v-bind:style="[style1, style2, style3]">789</div>

</template>

<script>
//import SchoolTitle from "../components/SchoolTitle.vue"
export default {
   
    data(){
        return {
            style1 : "width: 100px",
            style2 : "height: 100px",
            style3 : "backgroundColor: blue",

            styleObject : {
                color : "red",
                width : "100px",
                height : "100px",
                backgroundColor : "orange",
            },

            class2 : "class2",
            class3 : "class3",

            isError : true,

            isActive : true,

            textTitle : "",

            buttonDisabled : true,

            textReadOnly : true,

            imageSrc : "url('chrome://new-tab-page/icons/google_logo.svg')",

            href1 : "https://www.naver.com",
            href2 : "https://www.daum.net",

            checked : [], // checkbox는 여러개 선택 -> 배열 객체 
            check1Value : "등산",
            check2Value : "수영",
            
            checked2 : "", //라디오 -> 선택 -> 1개만 선택
            city1 : "인천",
            city2 : "서울",

            textValue : "텍스트 영역 내용..." ,
            
            selectedCity : "부산",
        };
    },
    created(){
        console.log("Created");
    },
    mounted(){
        console.log("Mounted");
        //this.title = "(변경)" + this.title;
        this.selectedCity = '서울';
    },
    unmounted(){
        console.log("Unmounted");
    },
    method : {
        changeTitle(){
            this.title = "(변경)" + this.title;
        }
    }
}
    
</script>
