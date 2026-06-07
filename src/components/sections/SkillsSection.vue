<template>
  <section id="skills" class="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Technical Skills
        </h2>
        <div class="mt-4 flex justify-center">
          <div class="w-24 h-1 bg-indigo-600 dark:bg-indigo-500 rounded"></div>
        </div>
      </div>

      <!-- Skill Logos Marquee -->
      <div class="mb-16 overflow-hidden relative w-full flex items-center bg-gray-900/5 dark:bg-gray-800 py-10 rounded-2xl shadow-inner border border-gray-200/50 dark:border-gray-700">
        <!-- Fade masks for smooth entry/exit edges -->
        <div class="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none"></div>
        <div class="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none"></div>
        
        <div class="marquee-content flex items-center gap-20 px-10">
          <div v-for="(logo, i) in duplicatedLogos" :key="i" class="flex items-center justify-center min-w-[120px] h-20 transition-all duration-500 hover:scale-110 cursor-pointer">
            <img :src="logo" class="max-h-full w-auto object-contain" alt="Skill Logo" />
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div v-for="(category, index) in skillCategories" :key="index" class="bg-white dark:bg-gray-900 rounded-xl shadow p-8 border border-gray-100 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-colors group">
          <div class="flex items-center mb-6">
            <div class="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg text-indigo-600 dark:text-indigo-400 mr-4">
               <!-- Dynamic icon mapping if desired, using a placeholder for now -->
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
               </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {{ category.name }}
            </h3>
          </div>
          
          <div class="flex flex-wrap gap-2">
            <span v-for="(skill, i) in category.skills" :key="i" class="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-indigo-900/80 dark:hover:text-white transition-colors cursor-default">
              {{ skill }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const getImageUrl = (name) => {
  return `/${name}`
}

const logoFiles = [
  'skillsLogo/Huawei-logo.webp', 'skillsLogo/Cisco-logo.webp', 'skillsLogo/wireshark-logo.webp', 'skillsLogo/Kali-linux.webp', 
  'skillsLogo/burpsuite-logo.webp', 'skillsLogo/splunk-logo.webp', 'skillsLogo/wazuh-logo.webp', 'skillsLogo/gns3-logo.webp',
  'skillsLogo/linux.webp', 'skillsLogo/docker.webp', 'skillsLogo/git.webp', 'skillsLogo/putty-logo.webp',
  'skillsLogo/vmware-logo.webp', 'skillsLogo/virtual-box-logo.webp', 'skillsLogo/pt.webp'
]
const skillLogos = logoFiles.map(getImageUrl)
const duplicatedLogos = [...skillLogos, ...skillLogos, ...skillLogos]

const skillCategories = [
  {
    name: 'Networking',
    skills: ['Huawei eNSP', 'Routing & Switching', 'Firewall (HRP, NAT, SLB)', 'Enterprise Network Design', 'VLAN', 'STP/RSTP', 'OSPF/BGP']
  },
  {
    name: 'Cyber Security',
    skills: ['Incident Reporting', 'Network Security', 'Security Analysis', 'Vulnerability Assessment', 'Linux Security', 'CTF Write-ups']
  },
  {
    name: 'Automation & Dev',
    skills: ['Python Automation', 'Bash Scripting', 'API Integration', 'Git', 'Linux Administration']
  },
  {
    name: 'Tools & Technologies',
    skills: ['Huawei eNSP', 'Cisco Packet Tracer', 'Wireshark', 'Nmap', 'Metasploit', 'VirtualBox']
  },
  {
    name: 'Cloud & Infrastructure',
    skills: ['Network Architecture', 'Data Center Networking', 'Remote Access VPN', 'Network Monitoring']
  },
  {
    name: 'Professional Skills',
    skills: ['Technical Documentation', 'Problem Solving', 'Security Auditing', 'Lab Environment Design']
  }
]
</script>

<style scoped>
.marquee-content {
  display: inline-flex;
  animation: marquee 60s linear infinite;
  min-width: max-content;
}
.marquee-content:hover {
  animation-play-state: paused;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(calc(-50% - 2rem)); } 
}
</style>
