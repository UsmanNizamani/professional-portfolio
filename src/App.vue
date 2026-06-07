<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
import { onMounted } from 'vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

onMounted(() => {
  // Ensure the theme is properly set when the app starts
  themeStore.setTheme(themeStore.theme)
})
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <Navbar />
    
    <main class="flex-grow">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>
