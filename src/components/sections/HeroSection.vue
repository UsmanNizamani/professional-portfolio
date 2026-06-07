<template>
  <section id="hero" class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
    <!-- Technical Dashboard Background Grid -->
    <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <!-- Image Grid (Reduced columns for larger images) -->
      <div class="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 opacity-[0.35] dark:opacity-[0.50] grayscale transition-all duration-700 filter blur-[0.5px]">
        <div v-for="(img, i) in bgImages" :key="i" class="relative aspect-video rounded-xl overflow-hidden border border-gray-400/30 dark:border-gray-500/30 shadow-2xl">
          <img :src="img" class="w-full h-full object-cover" alt="Background Technical Detail" />
        </div>
      </div>
      
      <!-- High-Contrast Overlays -->
      <!-- 1. Base theme tint -->
      <div class="absolute inset-0 bg-white/70 dark:bg-gray-900/80 transition-colors duration-300"></div>
      
      <!-- 2. Text focus mask (lighter in center) -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_white_100%)] dark:bg-[radial-gradient(circle_at_center,_transparent_0%,_#111827_100%)] opacity-40"></div>
      
      <!-- 3. Smooth transition to Summary section -->
      <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white dark:from-[#111111] to-transparent"></div>
      
      <!-- Original Decorative Blobs -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-200 dark:bg-indigo-900 opacity-20 blur-3xl animate-blob"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-purple-200 dark:bg-purple-900 opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="text-center md:text-left flex flex-col md:flex-row items-center justify-between">
        
        <div class="md:w-3/5 mb-10 md:mb-0">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span class="block mb-2">Hi, I'm</span>
            <span class="block text-indigo-600 dark:text-indigo-400">Muhammad Usman</span>
          </h1>
          <h2 class="mt-3 text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
            Cyber Security Student & Network Automation Enthusiast
          </h2>
          <p class="mt-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg sm:max-w-xl md:text-xl">
            Passionate about network security architecture, building comprehensive Huawei eNSP lab environments, and developing Python automation frameworks for seamless infrastructure management.
          </p>
          <div class="mt-8 sm:flex sm:justify-center md:justify-start gap-4">
            <div class="rounded-md shadow">
              <a href="#contact" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors md:py-4 md:text-lg md:px-10">
                Get in touch
              </a>
            </div>
            <div class="mt-3 sm:mt-0 rounded-md shadow">
              <a href="#projects" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors md:py-4 md:text-lg md:px-10">
                View Work
              </a>
            </div>
            <div class="mt-3 sm:mt-0 rounded-md shadow">
              <a href="/Muhammad_Usman_Resume.pdf" download="Muhammad_Usman_Resume.pdf" target="_blank" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors md:py-4 md:text-lg md:px-10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div class="md:w-2/5 flex justify-center mt-12 md:mt-0">
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <img class="relative rounded-full h-72 w-72 object-cover border-4 border-white dark:border-gray-800 shadow-2xl" src="/src/assets/usman.png" alt="Muhammad Usman" />
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
const bgImages = [
  '/src/assets/Hero-grid/AC-GUI.png',
  '/src/assets/Hero-grid/Huawei-firewall-dashboard.png',
  '/src/assets/Hero-grid/ghidra.png',
  '/src/assets/Hero-grid/tryhackme-dashboard.png',
  '/src/assets/Hero-grid/wazuh.png',
  '/src/assets/Hero-grid/burpsuite.png',
  '/src/assets/Hero-grid/Huawei-firewall-login-page.png',
  '/src/assets/Hero-grid/pfsense-login-page.png',
  '/src/assets/Hero-grid/Solarwinds-ssh-connections.png'
]
</script>
