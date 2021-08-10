<template>
    <h1>{{ fullName }}</h1>
    <button type="button" @click="changeFirstName">이름변경</button>
</template>

<script>
export default {
    data() {
        return {
            firstName : "DongBum",
            lastName : "Kang",
            fullName : "",
        };
    },
    watch : {
        firstName() {
            this.fullName = this.firstName+ " " + this.lastName;
        },
        lastName() {
            this.fullName = this.firstName+ " " + this.lastName;
        }
    },
    methods : {
        changeFirstName() {
            this.firstName = "Dongbum2";
        }
    }
}
</script>
