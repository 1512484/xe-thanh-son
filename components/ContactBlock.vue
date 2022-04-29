<template>
<div>
    <div id="contact" style="transform: translateY(-5rem);"></div>
    <v-layout class="w-full position-relative contact">
        <v-container class="contact-content">
            <v-img :src="require('@/assets/images/contact-full-car-img.svg')" class="contact-img" contain />
            <div class="left-content"></div>
            <div class="right-content">
                <h2>LIÊN HỆ</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie ac libero eget vehicula.</p>
                <v-form ref="form" lazy-validation>
                    <v-text-field required :rules="nameRules" solo flat v-model="name" placeholder="Họ và tên" />
                    <v-text-field required :rules="emailRules" solo flat v-model="email" placeholder="Email" />
                    <v-text-field required :rules="phoneRules" solo flat v-model="phone" placeholder="Số điện thoại" @keypress="checkNumber" />
                    <v-textarea required :rules="contentRules" solo flat v-model="content" placeholder="Nội dung" />
                </v-form>
                <v-btn color="white" class="send-btn" @click="sendMessage">Gửi</v-btn>
            </div>
        </v-container>
    </v-layout>
</div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            phone: "",
            content: "",
            nameRules: [v => !!v || ('Vui lòng nhập họ và tên')],
            emailRules: [
                v => {
                    if(v.length == 0) {
                        return 'Vui lòng nhập email';
                    }
                    if(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)) {
                        return true;
                    } else {
                        return 'Email không hợp lệ';
                    }
                }
            ],
            phoneRules: [
                v => !!v || 'Vui lòng nhập số điện thoại',
                v => {
                    if(v && v.length != 10) {
                        return 'Số điện thoại phải có 10 số';
                    }
                    return true;
                }
            ],
            contentRules: [v => !!v || ('Vui lòng nhập nội dung')]
        }
    },
    methods: {
        checkNumber(evt) {
            evt = evt ? evt : window.event;
            var charCode = evt.which ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) || this.phone.length >= 10) {
                evt.preventDefault();
            }
            return true;
        },
        sendMessage() {
            let isValid = this.$refs.form.validate();
            if(isValid) {
                console.log('Ok roi nha');
            } else {
                console.log('Loi roi nha');
            }
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/contact-block.scss";
</style>