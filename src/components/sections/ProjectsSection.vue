<template>
  <section id="projects" class="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Projects & Open Source
        </h2>
        <div class="mt-4 flex justify-center">
          <div class="w-24 h-1 bg-indigo-600 dark:bg-indigo-500 rounded"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Project Card -->
        <div 
          v-for="(project, index) in projects" 
          :key="index" 
          @click="openModal(project)"
          class="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 dark:border-gray-700 flex flex-col h-full transform hover:-translate-y-2 cursor-pointer"
        >
          
          <!-- Project Image -->
          <div v-if="project.images && project.images.length > 0" class="relative h-48 overflow-hidden">
            <img :src="project.images[0]" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div class="absolute inset-0 bg-indigo-600/10 group-hover:bg-transparent transition-colors duration-300"></div>
            <div class="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] px-2 py-1 rounded-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
              View Gallery
            </div>
          </div>
          <div v-else class="relative h-48 bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-indigo-300 dark:text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>

          <div class="p-6 flex-grow flex flex-col">
            <div class="flex items-center justify-between mb-4">
              <span class="px-3 py-1 text-xs font-semibold rounded-full" :class="project.type === 'Open Source' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'">
                {{ project.type }}
              </span>
            </div>
            
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {{ project.title }}
            </h3>
            
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mt-auto">
              <span v-for="(tech, i) in project.techStack" :key="i" class="px-2 py-0.5 rounded text-[10px] font-medium bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="px-6 pb-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div class="flex justify-between items-center">
              <span class="text-indigo-600 dark:text-indigo-400 text-sm font-medium">Click for details</span>
              <a v-if="project.link" :href="project.link" target="_blank" @click.stop class="inline-flex items-center text-sm text-gray-400 hover:text-indigo-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>

    <!-- Modal Backdrop -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="selectedProject" class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm" @click="closeModal">
        <!-- Modal Content -->
        <div class="bg-white dark:bg-gray-900 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col md:flex-row" @click.stop>
          
          <!-- Sidebar / Gallery -->
          <div class="w-full md:w-2/3 bg-gray-100 dark:bg-black overflow-y-auto custom-scrollbar relative group">
            <button @click="closeModal" class="md:hidden absolute top-4 right-4 z-20 p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-md">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div class="flex flex-col gap-4 p-4">
              <img 
                v-for="(img, i) in selectedProject.images" 
                :key="i" 
                :src="img" 
                class="w-full rounded-xl shadow-md border border-gray-200 dark:border-gray-800"
                :alt="`${selectedProject.title} screenshot ${i+1}`"
              />
            </div>
          </div>

          <!-- Info Panel -->
          <div class="w-full md:w-1/3 p-8 flex flex-col bg-white dark:bg-gray-900 border-l border-gray-100 dark:border-gray-800 overflow-y-auto">
            <div class="hidden md:flex justify-end mb-4">
              <button @click="closeModal" class="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <span class="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">{{ selectedProject.type }}</span>
            <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">{{ selectedProject.title }}</h2>
            
            <div class="space-y-6 flex-grow">
              <div>
                <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Description</h4>
                <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {{ selectedProject.detailedDescription || selectedProject.description }}
                </p>
              </div>

              <div>
                <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Technologies</h4>
                <div class="flex flex-wrap gap-2">
                  <span v-for="tech in selectedProject.techStack" :key="tech" class="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-md text-xs font-semibold">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>

            <div class="mt-auto pt-10 flex flex-col gap-3">
              <a v-if="selectedProject.videoLink" :href="selectedProject.videoLink" target="_blank" class="w-full flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold rounded-xl transition-all hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transform active:scale-95 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                Watch Demo on LinkedIn
              </a>

              <a v-if="selectedProject.docLink" :href="selectedProject.docLink" target="_blank" class="w-full flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 border-2 border-green-600 text-green-600 dark:text-green-400 font-bold rounded-xl transition-all hover:bg-green-50 dark:hover:bg-green-900/20 transform active:scale-95 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Full Documentation (PDF)
              </a>

              <a :href="selectedProject.link" target="_blank" class="w-full flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all transform active:scale-95 shadow-lg shadow-indigo-600/20">
                View on GitHub
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const selectedProject = ref(null)

const openModal = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedProject.value = null
  document.body.style.overflow = ''
}

// Close on escape key
const handleEsc = (e) => {
  if (e.key === 'Escape') closeModal()
}
onMounted(() => window.addEventListener('keydown', handleEsc))
onUnmounted(() => window.removeEventListener('keydown', handleEsc))

const projects = [
  {
    title: 'Secure Enterprise Network',
    type: 'Project',
    description: 'A multi-site enterprise network design connecting Dubai HQ and Karachi Branch. Features IPSec VPN, VRRP redundancy, HRP High Availability, and OSPF backbone routing.',
    detailedDescription: 'This comprehensive lab demonstrates a production-grade architecture using Huawei Versatile Routing Platform (VRP). It simulates a large-scale enterprise environment where security and uptime are mission-critical. I implemented a three-tier hierarchical model in the Dubai HQ and a site-to-site IPSec VPN to securely bridge communications with the Karachi branch. High availability is achieved through VRRP at the gateway and HRP for firewall active-standby clustering.',
    techStack: ['Huawei eNSP', 'VRP', 'IPSec VPN', 'VRRP', 'HRP', 'OSPF', 'MSTP'],
    images: [
      '/src/assets/portfolio/secure-network.png',
      '/src/assets/portfolio/secure-network-2.png',
      '/src/assets/portfolio/secure-network-3.png'
    ],
    docLink: '/Secure-Enterprise-Network-Report.pdf',
    link: 'https://github.com/UsmanNizamani/secure-enterprise-network-ensp'
  },
  {
    title: 'Network Automation Framework',
    type: 'Project',
    description: 'A Python-based framework for "Infrastructure as Code". Supports parallel multi-threaded deployments, automated security auditing, and dynamic HTML reporting.',
    detailedDescription: 'Built to automate the "10-Router Bootstrap" scenario, this framework leverages Python and Netmiko to manage enterprise-grade topologies. It features multi-threaded execution for near-instant connectivity checks and backups across dozens of devices. The framework also includes a custom regex-based auditing engine that validates configurations against security policies and generates professional HTML reports and per-device portals.',
    techStack: ['Python', 'Netmiko', 'Jinja2', 'IaC', 'Multi-threading', 'YAML', 'Regex'],
    images: [
      '/src/assets/portfolio/automation-framework.png',
      '/src/assets/portfolio/automation-framework-2.png',
      '/src/assets/portfolio/automation-framework-3.png',
      '/src/assets/portfolio/automation-framework-4.png'
    ],
    videoLink: 'https://www.linkedin.com/posts/muhammad-usman-b38949287_networkautomation-python-netmiko-ugcPost-7468009338410893332-yUqL/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEW6oxwBYcK0v29Gygqg0PO7F3EsitVZiJ8',
    link: 'https://github.com/UsmanNizamani/ensp-automation-framework'
  },
  {
    title: 'eNSP-Heaven',
    type: 'Open Source',
    description: 'A massive repository of 46 professional Huawei eNSP labs. Includes everything from VRP fundamentals to advanced security zones, NAT Server, and Wireless LAN setups.',
    detailedDescription: 'This is my personal repository of 46 distinct hands-on networking labs. It serves as a documentation of my journey through the Huawei HCIA curriculum. The labs are organized into pillars: Fundamentals, Switching (VLANs, STP), Routing (Static, OSPF), Security (Firewalls, NAT, HRP), Network Services (DHCP, FTP), and WLAN. Each lab includes a topology file, full configurations, and implementation screenshots.',
    techStack: ['Huawei eNSP', 'Switching', 'Routing', 'Firewall', 'WLAN', 'NAT', 'HRP'],
    images: [
      '/src/assets/portfolio/ensp-heaven.png',
      '/src/assets/portfolio/ensp-heaven-2.png',
      '/src/assets/portfolio/ensp-heaven-3.png'
    ],
    link: 'https://github.com/UsmanNizamani/eNSP-Heaven'
  },
  {
    title: 'OverTheWire Bandit Write-ups',
    type: 'Security',
    description: 'Comprehensive documentation and solutions for the Bandit wargame. Highlights mastery of Linux command-line, file permissions, and foundational security challenges.',
    detailedDescription: 'These write-ups document the process of solving levels 0 through 34 of the Bandit wargame. The focus is on demonstrating proficiency in Linux system administration and foundational cybersecurity concepts such as SSH tunneling, file permission exploits, base64 decoding, and password extraction from compressed files.',
    techStack: ['Linux', 'SSH', 'Cybersecurity', 'CTF', 'Documentation', 'Bash'],
    images: [
      '/src/assets/portfolio/bandit.png'
    ],
    link: 'https://github.com/UsmanNizamani/overthewire-bandit'
  }
]
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #4f46e5;
  border-radius: 10px;
}
</style>
