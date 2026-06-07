<template>
  <section id="experience" class="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Professional Experience
        </h2>
        <div class="mt-4 flex justify-center">
          <div class="w-24 h-1 bg-indigo-600 dark:bg-indigo-500 rounded"></div>
        </div>
      </div>

      <div class="relative">
        <!-- Vertical Timeline Line -->
        <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>

        <div class="space-y-12">
          <!-- Experience Card Loop -->
          <div v-for="(job, index) in experiences" :key="index" class="relative flex flex-col md:flex-row justify-between items-center w-full">
            
            <!-- Timeline Dot -->
            <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 items-center justify-center ring-4 ring-white dark:ring-gray-900 z-10 transition-colors shadow">
              <span class="w-3 h-3 bg-white rounded-full"></span>
            </div>

            <!-- Content Container -->
            <div :class="['w-full md:w-5/12', index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto']">
              <div :class="[
                'p-8 rounded-2xl transition-all border relative z-10 group',
                job.type === 'event' 
                  ? 'bg-gray-100/50 dark:bg-gray-800/30 border-gray-200/50 dark:border-gray-700/50 shadow-sm opacity-80 hover:opacity-100' 
                  : 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl'
              ]">
                <!-- Header Info -->
                <div class="flex flex-col mb-6">
                  <div class="flex justify-between items-start mb-2">
                    <h3 :class="['text-xl font-bold transition-colors', job.type === 'event' ? 'text-gray-700 dark:text-gray-300' : 'text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400']">
                      {{ job.role }}
                    </h3>
                  </div>
                  <div class="flex flex-wrap items-center gap-2 text-sm">
                    <span :class="['font-bold', job.type === 'event' ? 'text-gray-500 dark:text-gray-400' : 'text-indigo-600 dark:text-indigo-400']">{{ job.company }}</span>
                    <span v-if="job.location" class="text-gray-400">|</span>
                    <span v-if="job.location" class="text-gray-500 dark:text-gray-400">{{ job.location }}</span>
                    <span :class="[
                      'ml-auto px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border',
                      job.type === 'event'
                        ? 'bg-gray-200/50 dark:bg-gray-700/30 text-gray-500 dark:text-gray-400 border-gray-300/50 dark:border-gray-600/50'
                        : 'bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 border-indigo-100 dark:border-indigo-800'
                    ]">
                      {{ job.duration }}
                    </span>
                  </div>
                </div>
                
                <!-- Event Photo (Smaller for events) -->
                <div v-if="job.image" :class="['mb-6 overflow-hidden rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm', job.type === 'event' ? 'max-w-xs mx-auto grayscale group-hover:grayscale-0 transition-all duration-700' : '']">
                  <img :src="job.image" :alt="job.company" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                
                <!-- Details List -->
                <ul class="space-y-3 text-left">
                  <li v-for="(detail, i) in job.details" :key="i" class="flex items-start text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <span :class="['mr-3 mt-1.5 flex-shrink-0', job.type === 'event' ? 'text-gray-400' : 'text-indigo-500']">
                      <svg class="h-1.5 w-1.5 fill-current" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" /></svg>
                    </span>
                    <span>{{ detail }}</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    role: 'Network Engineering Lab Creator',
    company: 'eNSP-Heaven (Open Source)',
    location: 'Remote',
    duration: '2023 to Present',
    details: [
      'Architected and documented over 46 professional Huawei eNSP labs, covering complex routing, switching, and firewall security configurations.',
      'Provided a comprehensive resource for the networking community, helping students and professionals master Huawei enterprise networking.',
      'Implemented advanced features like Hot Standby Router Protocol (HRP) and Server Load Balancing (SLB) in simulated environments.',
      'Maintained a structured repository with detailed step-by-step instructions and network topologies.'
    ]
  },
  {
    role: 'Automation Developer',
    company: 'eNSP Automation Framework',
    location: 'MUET, Pakistan',
    duration: '2024 to Present',
    details: [
      'Developed a Python-based framework to automate repetitive configuration tasks within Huawei eNSP lab environments.',
      'Bridged the gap between networking and software development by implementing custom automation scripts using Netmiko and Python.',
      'Streamlined lab setup processes, reducing manual configuration time by over 60%.'
    ]
  },
  {
    role: 'Cyber Security Analyst (Academic Projects)',
    company: 'Mehran University of Engineering & Technology',
    location: 'Jamshoro, Pakistan',
    duration: '2022 to Present',
    details: [
      'Conducted detailed analysis of cybersecurity incidents and documented them in a professional format.',
      'Completed multiple levels of OverTheWire Bandit wargame, demonstrating proficiency in Linux CLI and foundational security concepts.',
      'Designed and simulated secure multi-site enterprise networks, ensuring robust data protection between branches.'
    ]
  },
  {
    type: 'event',
    role: 'Cyber Security Competitor',
    company: 'NADRA Bug Bounty Challenge',
    duration: '2026',
    image: '/src/assets/portfolio/Nadra-bug-bounty.jpg',
    details: [
      'Participated in the national-level Bug Bounty Challenge organized by NADRA.',
      'Collaborated with a technical team to identify potential security vulnerabilities.',
      'Tested security analysis skills under high-pressure competitive conditions.'
    ]
  }
]
</script>
