<template>
  <v-app dark>
    <the-header />
    <v-main class="pa-0">
      <v-container fluid class="pa-0">
        <Nuxt />
      </v-container>
    </v-main>
    <the-footer />
    <div>
      <!-- <div id="fb-root"></div>
      <div id="fb-customer-chat" class="fb-customerchat"></div> -->
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      
    }
  }
}
</script>
