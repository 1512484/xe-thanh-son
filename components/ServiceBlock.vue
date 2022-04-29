<template>
    <v-layout class="w-full position-relative service" id="service">
        <v-container class="service-content">
            <h2>DỊCH VỤ</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie ac libero eget vehicula. Suspendisse consequat justo ipsum.</p>
            <v-layout class="service-list">
                <v-card v-for="service in serviceList" :key="service.id" flat>
                    <v-img :src="service.icon" contain class="icon" />
                    <p class="title">{{ service.title }}</p>
                    <p class="mb-0 content">{{ service.content }}</p>
                </v-card>
            </v-layout>
        </v-container>
    </v-layout>
</template>

<script>
export default {
    data() {
        return {
            serviceList: [
                {
                    id: 1,
                    title: "XE 4 CHỖ TỰ LÁI",
                    content: "Dịch vụ cho thuê xe 4 chỗ tự lái uy tín và chất lượng nhất tại TPHCM. Với chất lượng xe luôn đảm bảo, đa dạng xe các loại xe.",
                    icon: require('@/assets/images/service-icon-1.svg')
                },
                {
                    id: 2,
                    title: "XE 7 CHỖ TỰ LÁI",
                    content: "Dịch vụ cho thuê xe 7 chỗ tự lái uy tín và chất lượng nhất tại TPHCM. Với chất lượng xe luôn đảm bảo, đa dạng xe các loại xe.",
                    icon: require('@/assets/images/service-icon-2.svg')
                },
                {
                    id: 3,
                    title: "XE CHẠY TOUR",
                    content: "Dịch vụ cho thuê xe đi tour không chỉ cho thuê xe tự lái mà còn bao gồm cho thuê xe có người lái, xe đi tour có người hướng dẫn du lịch.",
                    icon: require('@/assets/images/service-icon-3.svg')
                },
                {
                    id: 4,
                    title: "XE CHẠY THÁNG",
                    content: "Với mong muốn cung cấp những dịch vụ uy tín, Chúng tôi là công ty được thành lập từ lâu nhằm đáp ứng nhu cầu của khách hàng.",
                    icon: require('@/assets/images/service-icon-4.svg')
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/service-block.scss";
</style>