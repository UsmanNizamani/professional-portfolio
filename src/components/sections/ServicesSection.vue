<template>
  <section id="services" class="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h5 class="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">Services</h5>
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          What Can I Do For You?
        </h2>
        <p class="mt-4 text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Take a look at some of the services I provide.
        </p>
        <div class="mt-6 flex justify-center">
          <div class="w-24 h-1 bg-indigo-600 dark:bg-indigo-500 rounded"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" :key="index" class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
          <div class="w-16 h-16 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 p-3 border border-gray-100 dark:border-gray-700 overflow-hidden">
            <img :src="service.image" :alt="service.title" class="max-w-full max-h-full object-contain" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">{{ service.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Network Architecture Design',
    image: '/src/assets/ServicesLogo/Network-Architecture-Design.png',
    description: 'Designing robust and scalable enterprise network architectures using Huawei eNSP and Cisco Packet Tracer, ensuring high availability and performance.'
  },
  {
    title: 'Network Automation',
    image: '/src/assets/ServicesLogo/network-automation.png',
    description: 'Developing Python-based automation frameworks to streamline network configurations, lab setups, and infrastructure management tasks.'
  },
  {
    title: 'Cyber Security Consulting',
    image: '/src/assets/ServicesLogo/cyber-security.png',
    description: 'Providing expert advice on network security protocols, firewall configurations, and vulnerability assessments to protect enterprise assets.'
  },
  {
    title: 'Incident Analysis & Reporting',
    image: '/src/assets/ServicesLogo/incident-responce.png',
    description: 'Systematically documenting and analyzing cybersecurity incidents to understand attack vectors and develop effective mitigation strategies.'
  },
  {
    title: 'Linux Systems Administration',
    image: '/src/assets/ServicesLogo/linux-system-admin.png',
    description: 'Managing and securing Linux-based environments, providing foundational support for network services and security tools.'
  },
  {
    title: 'Lab Environment Design',
    image: '/src/assets/ServicesLogo/Lab-enviroment.png',
    description: 'Creating comprehensive network lab environments for educational and testing purposes, specifically tailored for Huawei eNSP platforms.'
  }
];
</script>
