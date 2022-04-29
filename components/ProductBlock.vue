<template>
<div>
    <div id="product" style="transform: translateY(-4rem);"></div>
    <v-layout class="w-full position-relative product">
        <v-container class="product-content">
            <h2>CÁC DÒNG XE</h2>
            <v-layout wrap class="category" justify-center align-center>
                <v-btn text v-for="category in categoryList" :key="category.id" class="category-item" :class="{'active': currentId == category.id}" @click="currentId = category.id">
                    {{ category.title }}
                </v-btn>
            </v-layout>
            <v-layout wrap class="product-list" v-if="currentCategory && currentCategory.products && currentCategory.products.length">
                <v-card v-for="product in currentCategory.products" :key="product.id" flat>
                    <v-img :src="product.image" class="product-img" contain />
                    <div class="position-relative product-top">
                    </div>
                    <p class="title">{{ product.title }}</p>
                    <div class="description">
                        <p>Số chỗ: {{ product.seat }} chỗ</p>
                        <p>Nhiên liệu: {{ product.fuel }}</p>
                        <p>Tiêu hao: {{ product.consumption }}</p>
                        <p>Bảo hiểm: {{ product.insurance }}</p>
                    </div>
                    <v-btn color="primary" class="contact-btn">Liên Hệ</v-btn>
                </v-card>
            </v-layout>
            <v-layout justify-center class="no-data-available" v-else>
                Không có sản phẩm nào
            </v-layout>
        </v-container>
    </v-layout>
</div>
</template>

<script>
export default {
    data() {
        let arr = [4, 7, 16];
        let categoryList = arr.map((num, index) => {
            return {
                id: index + 1,
                title: `XE ${num} CHỖ`,
                products: [...Array(4)].map((item, i) => {
                    return {
                        id: i + 1,
                        image: require('@/assets/images/car-item-img.svg'),
                        title: `Xe Toyota Vios ${num}`,
                        seat: num + 1,
                        fuel: "Xăng",
                        consumption: "5,7L/100km",
                        insurance: "2 chiều"
                    }
                })
            }
        });
        let currentId = -1;
        if(categoryList.length) {
            currentId = categoryList[0].id;
        }
        return {
            categoryList,
            currentId
        }
    },
    computed: {
        currentCategory() {
            if(this.categoryList && this.categoryList.length && this.currentId != -1) {
                return this.categoryList.find(category => category.id == this.currentId);
            }
            return null;
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/product-block.scss";
</style>