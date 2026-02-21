<template>
    <section class="grid grid-cols-1 p-md rounded-2xl bg-secondary md:p-lg lg:rounded-3xl lg:p-xl lg:grid-cols-2">
        <Educationsection />
        <Experiencesection />
        <skillsection />
        <languagesection />
    </section>
</template>


<script setup lang="ts">
import Educationsection from '~/components/resume/Educationsection.vue';
import Experiencesection from '~/components/resume/Experiencesection.vue';
import skillsection from '~/components/resume/skillsection.vue';
import languagesection from '~/components/resume/languagesection.vue';
</script>