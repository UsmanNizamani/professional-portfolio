<template>
  <section id="education" class="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Education & Certifications
        </h2>
        <div class="mt-4 flex justify-center">
          <div class="w-24 h-1 bg-indigo-600 dark:bg-indigo-500 rounded"></div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <!-- Education Column -->
        <div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            Academic Journey
          </h3>
          
          <div class="space-y-8 mb-12">
            <div v-for="(edu, i) in education" :key="i" class="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-indigo-600 dark:before:bg-indigo-500 before:rounded-full before:ring-4 before:ring-indigo-100 dark:before:ring-indigo-900/50">
               <!-- Connecting Line -->
               <div v-if="i !== education.length - 1" class="absolute left-1.5 top-5 w-0.5 h-full bg-indigo-100 dark:bg-gray-800 -ml-[1px] mt-1 z-[-1]"></div>
               
               <h4 class="text-xl font-bold text-gray-900 dark:text-white">{{ edu.degree }}</h4>
               <div class="text-indigo-600 dark:text-indigo-400 font-medium my-1">{{ edu.institution }} | {{ edu.duration }}</div>
               <p class="text-gray-600 dark:text-gray-400 text-sm mb-1"><span class="font-semibold text-gray-800 dark:text-gray-300">CGPA:</span> {{ edu.cgpa }}</p>
               <p v-if="edu.thesis" class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed"><span class="font-semibold text-gray-800 dark:text-gray-300">Thesis/Project:</span> {{ edu.thesis }}</p>
            </div>
          </div>

          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Key Lab Projects
          </h3>
          <div class="bg-indigo-50 dark:bg-indigo-900/20 p-5 rounded-lg border-l-4 border-indigo-500">
             <p class="text-sm text-gray-700 dark:text-gray-300 italic leading-relaxed">
               Designed and implemented complex multi-site enterprise networks, bridging Dubai and Karachi branch offices with advanced security protocols and high availability features.
             </p>
          </div>
        </div>

        <!-- Certifications & Awards Column -->
        <div>
           <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Professional Certifications
          </h3>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            <div v-for="(cert, i) in certifications" :key="i" class="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all group">
              <div class="flex items-center mb-3">
                <div class="w-12 h-12 flex-shrink-0 mr-3">
                  <img :src="cert.badge" :alt="cert.title" class="w-full h-full object-contain" />
                </div>
                <h4 class="text-sm font-bold text-gray-900 dark:text-white leading-tight group-hover:text-indigo-600 transition-colors">{{ cert.title }}</h4>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-[10px] text-gray-500 dark:text-gray-400 uppercase font-semibold tracking-wider">{{ cert.issuer }}</span>
                <a :href="cert.link" target="_blank" class="text-[10px] text-indigo-600 hover:underline font-bold">Verify</a>
              </div>
            </div>
          </div>

          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            Awards & Recognition
          </h3>
          
          <div class="space-y-4">
            <div v-for="(award, i) in awards" :key="i" class="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow transition-shadow">
              <div class="flex items-start">
                <div class="flex-shrink-0 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div class="ml-3">
                  <h4 class="text-md font-bold text-gray-900 dark:text-white">{{ award.title }}</h4>
                  <p class="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{{ award.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const education = [
  {
    degree: 'Bachelor of Engineering in Computer Systems / Cyber Security',
    institution: 'Mehran University of Engineering & Technology (MUET)',
    duration: '2022 to 2026 (Expected)',
    cgpa: 'Ongoing',
    thesis: 'Focus on Network Security and Automation Frameworks'
  }
]

const certifications = [
  {
    title: 'Certified Network Security Practitioner (CNSP)',
    issuer: 'SecOps Group',
    badge: '/src/assets/portfolio/cnsp-badge.png',
    link: '/MuhammadUsman-CNSP.pdf'
  },
  {
    title: 'HCIA-Datacom',
    issuer: 'Huawei',
    badge: '/src/assets/portfolio/hcia-badge.webp',
    link: '/HCIA-Datacom.pdf'
  },
  {
    title: 'Google Cybersecurity Professional',
    issuer: 'Google / Coursera',
    badge: '/src/assets/portfolio/google-cybersec.png',
    link: '/GoogleCybersecurityProfessionalCertificateV2_Badge20260606-31-4bnra0.pdf'
  },
  {
    title: 'Google Prompting Essentials',
    issuer: 'Google',
    badge: '/src/assets/portfolio/google-prompting.png',
    link: '/GooglePromptingEssentials_Badge20260606-31-59ui2o.pdf'
  }
]

const awards = [
  {
    title: 'Top Contributor - eNSP Community',
    description: 'Recognized for creating and documenting over 46 professional Huawei eNSP labs for the networking community.'
  },
  {
    title: 'Security Write-up Excellence',
    description: 'Consistently providing detailed and structured write-ups for cybersecurity challenges like OverTheWire Bandit.'
  }
]
</script>
