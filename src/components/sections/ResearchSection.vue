<template>
  <section id="research" class="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h5 class="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">My Focus</h5>
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          Research Interests
        </h2>
        <div class="mt-6 flex justify-center">
          <div class="w-24 h-1 bg-indigo-600 dark:bg-indigo-500 rounded"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="(item, index) in researchInterests" :key="index" class="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 hover:shadow-2xl transition-all duration-300 group flex flex-col h-full hover:-translate-y-1">
          <div class="flex items-center mb-6">
            <div class="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl text-indigo-600 dark:text-indigo-400 mr-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
              <span v-html="item.icon" class="w-8 h-8 flex items-center justify-center"></span>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {{ item.title }}
            </h3>
          </div>
          
          <p class="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed flex-grow">
            {{ item.description }}
          </p>

          <div class="space-y-4 border-t border-gray-100 dark:border-gray-800 pt-6">
            <div v-for="(highlight, hIndex) in item.highlights" :key="hIndex" class="bg-gray-50 dark:bg-gray-800/80 rounded-lg p-4 transition-colors">
              <h4 class="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                {{ highlight.label }}
              </h4>
              <p class="text-gray-700 dark:text-gray-300 text-sm">
                {{ highlight.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const researchInterests = [
  {
    title: 'Network Security Architecture',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>',
    description: 'Deep diving into the design of secure enterprise network architectures. My focus is on implementing robust firewall rules, HRP (Hot Standby Router Protocol), and SLB (Server Load Balancing) in Huawei eNSP environments.',
    highlights: [
      { label: 'Current Focus', text: 'Mastering Huawei eNSP for simulating complex multi-site enterprise networks.' },
      { label: 'Key Question', text: 'How to optimize network convergence and security while maintaining high availability in enterprise branches?' }
    ]
  },
  {
    title: 'Network Automation (Python)',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>',
    description: 'Passionate about bridging networking with software engineering. I develop Python scripts and frameworks to automate repetitive lab configurations and infrastructure tasks.',
    highlights: [
      { label: 'Project Work', text: 'Developed an automation framework for Huawei eNSP labs to streamline configuration deployments.' },
      { label: 'Tech Stack', text: 'Utilizing Python, Netmiko, and custom APIs to interact with network simulation environments.' }
    ]
  },
  {
    title: 'Cybersecurity Incident Analysis',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>',
    description: 'Interested in the systematic analysis and documentation of cybersecurity incidents. I maintain a repository of incident reports to better understand attack vectors and mitigation strategies.',
    highlights: [
      { label: 'Applications', text: 'Documenting real-world security scenarios and lab-based incident simulations.' },
      { label: 'Goal', text: 'Developing a structured approach to incident response and post-mortem analysis.' }
    ]
  },
  {
    title: 'Linux Security & CTF Challenges',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m-16.5 0V15a3.375 3.375 0 003.375 3.375h12.6a3.375 3.375 0 003.375-3.375V11.25" /></svg>',
    description: 'Constantly sharpening my cybersecurity skills through Capture The Flag (CTF) challenges and Linux security wargames like OverTheWire Bandit.',
    highlights: [
      { label: 'Progress', text: 'Completed and documented various levels of OverTheWire Bandit, mastering Linux CLI and security fundamentals.' }
    ]
  }
];;
</script>
