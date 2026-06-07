<script setup>
import HeroSection from '@/components/sections/HeroSection.vue'
import SummarySection from '@/components/sections/SummarySection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import EducationSection from '@/components/sections/EducationSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
</script>

<template>
  <div class="flex flex-col">
    <HeroSection />
    <SummarySection />
    <ProjectsSection />
    <SkillsSection />
    <ExperienceSection />
    <EducationSection />
    <ServicesSection />
    <ContactSection />
  </div>
</template>
