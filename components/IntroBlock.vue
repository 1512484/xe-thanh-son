<template>
    <v-layout class="w-full position-relative intro" id="intro">
        <v-img :src="require('@/assets/images/intro-car-map-img.svg')" class="intro-img" contain />
        <v-container class="intro-content">
            <h2>GIỚI THIỆU</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie ac libero eget vehicula. Suspendisse consequat justo ipsum, non volutpat ipsum tincidunt a. Pellentesque ac ante ac velit sollicitudin tempus vel id nisl. Nullam ut tincidunt augue.</p>
            <v-btn color="primary" class="contact-btn" @click="goToContact">Liên Hệ Ngay</v-btn>
        </v-container>
    </v-layout>
</template>

<script>
export default {
    methods: {
        goToContact() {
            let contact = document.getElementById("contact");
            if(contact) {
                contact.scrollIntoView();
            }
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/intro-block.scss";
</style>