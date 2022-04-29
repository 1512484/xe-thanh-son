<template>
    <v-footer class="footer">
        <v-container class="pa-0">
            <v-layout justify-space-between class="footer-layout">
                <v-flex class="footer-column">
                    <p class="footer-title">Thông tin</p>
                    <p>Xethanhson</p>
                    <v-layout align-start class="shop-info">
                        <v-img :src="require('@/assets/images/home-icon.svg')" class="info-icon" contain />
                        <p class="mb-0">8 TM1 - 6 KĐT The Manor Central Park, Nguyễn Xiển, Hoàng Mai, Hà Nội</p>
                    </v-layout>
                    <v-layout align-start class="shop-info">
                        <v-img :src="require('@/assets/images/phone-icon.svg')" class="info-icon" contain />
                        <p class="mb-0">(028) 1234 5678</p>
                    </v-layout>
                    <v-layout align-start class="shop-info">
                        <v-img :src="require('@/assets/images/message-icon.svg')" class="info-icon" contain />
                        <p class="mb-0">xethanhson@gmail.com</p>
                    </v-layout>
                </v-flex>
                <v-flex class="footer-column">
                    <p class="footer-title">Kết nối với chúng tôi</p>
                    <v-layout>
                        <a target="_blank" href="https://www.youtube.com/" class="social">
                            <v-img :src="require('@/assets/images/youtube-logo.svg')" class="social-icon youtube" contain />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/" class="social">
                            <v-img :src="require('@/assets/images/instagram-logo.svg')" class="social-icon instagram" contain />
                        </a>
                        <a target="_blank" href="https://www.facebook.com/" class="social">
                            <v-img :src="require('@/assets/images/facebook-logo.svg')" class="social-icon facebook" contain />
                        </a>
                    </v-layout>
                </v-flex>
            </v-layout>
            <v-divider />
            <p class="copyright">© 2022 Xethanhson. All rights reserved</p>
        </v-container>
    </v-footer>
</template>

<style lang="scss">
    @import "@/assets/scss/the-footer.scss";
</style>