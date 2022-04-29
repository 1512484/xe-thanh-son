<template>
<div>
    <v-navigation-drawer v-model="drawer" fixed app color="C20" width="80%" class="pa-6 py-10 hidden-md-and-up" content-class="mini-sidebar-menu">
        <v-img :src="require('@/assets/images/logo-custom.svg')" contain class="logo" />
        <v-list class="mini-sidebar-menu-list">
            <v-list-item v-for="(link, index) in links" :key="index" :class="[link.id == activeId && 'active']" @click="scrollTo(link.id)">
                <v-list-item-content>
                    <v-list-item-title v-text="link.title" class="white--text" />
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-app-bar :fixed="true" app flat :color="bgShow ? 'white' : 'transparent'" :class="{'show-bg': bgShow}">
        <v-container>
            <v-layout justify-space-between align-center>
                <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
                <v-img :src="require('@/assets/images/logo.svg')" contain class="logo hidden-xs-and-down" />
                <v-layout no-gutters class="unset-flex link-group hidden-sm-and-down">
                    <v-btn text v-for="(link, index) in links" :key="index" class="link-btn" :class="[link.id == activeId && 'active']" @click="scrollTo(link.id)">
                        {{ link.title }}
                    </v-btn>
                </v-layout>
                <p class="font-semibold mb-0">GỌI NGAY:  (028) 1234 5678</p>
            </v-layout>
        </v-container>
    </v-app-bar>
</div>   
</template>

<script>
export default {
    data() {
        return {
            links: [
                { id: "intro", title: "Giới thiệu" },
                { id: "service", title: "Dịch vụ" },
                { id: "product", title: "Các dòng xe" },
                { id: "contact", title: "Liên hệ" }
            ],
            drawer: false,
            bgShow: false,
            activeId: "intro"
        }
    },
    mounted() {
        window.onscroll = () => {
            this.changeColor();
            this.toggleActiveLink();
        };
    },
    methods: {
        changeColor() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                this.bgShow = true;
            } else {
                this.bgShow = false;
            }
        },
        scrollTo(id) {
            let block = document.getElementById(id);
            if(block) {
                block.scrollIntoView();
            }
            this.drawer = false;
            this.activeId = id;
        },
        toggleActiveLink() {
            if(this.links && this.links.length) {
                this.activeId = "intro";
                for(let i = 0; i < this.links.length; i++) {
                    let current = document.getElementById(this.links[i].id);
                    let current_to_top = 0;
                    if(current) {
                        current_to_top = current.getBoundingClientRect().top;
                    }
                    if(i != this.links.length - 1) {
                        let after = document.getElementById(this.links[i + 1].id);
                        if(after) {
                            let after_to_top = after.getBoundingClientRect().top;
                            if(current_to_top <= 80 && after_to_top > 80) {
                                this.activeId = this.links[i].id;
                                break;
                            }
                        }
                    } else {
                        if(current_to_top <= 80) {
                            this.activeId = this.links[i].id;
                        }
                    }
                }
            }
        }
    }
}
</script>

<style lang="scss">
    @import "@/assets/scss/the-header.scss";
</style>