<template>
    <section class="relative flex flex-col justify-start items-center md:p-lg lg:p-xl">

        <!-- عنوان -->
        <h2
            class="text-secondary_heading font-bold text-h2-mobile mb-sm md:text-h2-tablet md:mb-md lg:text-h2-desktop lg:mb-lg">
            {{ Education.educationTitle }}
        </h2>

        <!-- تایم‌لاین -->
        <div class="relative max-w-5xl mx-auto">

            <!-- دایره انتهای خط -->
            <div
                class="absolute right-1 bottom-0 translate-y-1/2 w-4 h-4 rounded-full bg-edu_border md:right-1/2 md:translate-x-1/2">
            </div>

            <!-- خط عمودی وسط -->
            <div class="absolute right-[10px] top-0 bottom-0 w-[3px] bg-edu_border md:right-1/2 md:translate-x-1/2">
            </div>

            <!-- آیتم‌ها -->
            <div v-for="item in Education.items" :key="item.id"
                class="relative flex flex-col items-start pr-10 md:flex-row md:gap-x-40">

                <!-- سال‌ها (سمت راست) -->
                <p class="text-secondary_heading text-h2-mobile -mb-sm">
                    {{ item.endYear }} - {{ item.startYear }}
                </p>


                <div class="flex flex-col items-start">
                    <!-- دانشگاه (سمت چپ) -->
                    <h3 class="text-secondary_heading text-h2-mobile lg:mb-0">
                        {{ item.university }}
                    </h3>
                    <p class="mb-md">
                        {{ item.degree }}
                    </p>
                </div>

                <!-- دایره روی خط -->
                <div class="absolute right-1 top-0 w-4 h-4 rounded-full bg-edu_border md:right-1/2 md:translate-x-1/2">
                </div>

            </div>

        </div>

    </section>
</template>

<script setup lang="ts">
import { useResumeData } from '../composables/useResumeData';
const { Education } = useResumeData()
</script>



<!-- <template>
    <section class="relative flex flex-col justify-start items-center md:p-lg lg:p-xl">

        عنوان
        <h2
            class="text-secondary_heading font-bold text-h2-mobile mb-sm md:text-h2-tablet md:mb-md lg:text-h2-desktop lg:mb-lg">
            {{ Education.educationTitle }}
        </h2>

        تایم‌لاین
        <div class="relative max-w-5xl mx-auto">

            دایره انتهای خط
            <div
                class="absolute right-1 bottom-0 translate-y-1/2 w-4 h-4 rounded-full bg-edu_border md:right-1/2 md:translate-x-1/2">
            </div>

            خط عمودی وسط
            <div class="absolute right-[10px] top-0 bottom-0 w-[3px] bg-edu_border md:right-1/2 md:translate-x-1/2">
            </div>

            آیتم‌ها
            <div v-for="item in Education.items" :key="item.id"
                class="relative grid grid-cols-1 pr-10 md:grid-cols-[1fr_40px_1fr] md:items-center md:py-lg md:pr-0">

                سال‌ها (سمت راست)
                <p class="text-secondary_heading text-h2-mobile -mb-sm md:col-start-1 md:text-left md:self-start">
                    {{ item.endYear }} - {{ item.startYear }}
                </p>

                
                <div class="flex flex-col items-start md:col-start-3 md:text-right md:self-start">
                    دانشگاه (سمت چپ)
                    <h3 class="text-secondary_heading text-h2-mobile lg:mb-0">
                        {{ item.university }}
                    </h3>
                    <p class="mb-md">
                        {{ item.degree }}
                    </p>
                </div>

                دایره روی خط
                <div class="absolute right-1 top-0 w-4 h-4 rounded-full bg-edu_border md:right-1/2 md:translate-x-1/2">
                </div>

            </div>

        </div>

    </section>
</template>

<script setup lang="ts">
import { useResumeData } from '../composables/useResumeData';
const { Education } = useResumeData()
</script>

 -->
