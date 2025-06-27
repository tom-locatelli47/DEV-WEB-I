<script setup>
import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <HeaderComponent></HeaderComponent>
  <RouterView></RouterView>
  <Footer></Footer>
</template>

<style scoped>

</style>