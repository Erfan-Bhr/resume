<template>
    <section ref="cardRef" @mousemove="handleMouseMove" @mouseleave="resetCard"
        class="relative flex flex-col justify-center items-center rounded-2xl p-md transition-transform duration-200 ease-out will-change-transform bg-primary md:p-lg lg:rounded-3xl lg:p-xl"
        style="transform-style: preserve-3d;">
        <div
            class="flex flex-col justify- items-center gap-1 pb-xl lg:flex-row lg:justify-center lg:items-center lg:gap-lg">
            <img class="w-[200px] h-[200px] mb-lg rounded-lg md:mb-xl md:w-[355px] md:h-[355px] lg:rounded-xl lg:w-[310px] lg:h-[310px]"
                src="~/assets/img/ErfanBahari.jpg" alt="عرفان بهاری">
            <div class="flex flex-col items-center lg:flex lg:flex-col lg:items-start">
                <div class="flex flex-col items-center lg:items-start">
                    <h1 class="font-bold text-h1-mobile md:text-h1-tablet lg:text-h1-desktop">{{ fullName }}</h1>
                    <h2 class="font-medium pb-3 text-h2-mobile md:text-h2-tablet lg:text-h2-desktop">{{ jobTitle }}</h2>
                </div>
                <p class="text-center lg:text-right">{{ summary }}</p>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-y-4 lg:gap-x-16">
            <div class="flex items-center gap-2">
                <Icon icon="mdi:calendar" class="w-6 h-6" />
                <p>{{ birthday }}</p>
            </div>
            <div class="flex items-center gap-2">
                <Icon icon="mdi:location" class="w-6 h-6" />
                <p>{{ placeOfResidence }}</p>
            </div>
            <div class="flex items-center gap-2">
                <Icon icon="mdi:phone" class="w-6 h-6" />
                <p>{{ phone }}</p>
            </div>
            <div class="flex items-center gap-2">
                <Icon icon="mdi:telegram" class="w-6 h-6" />
                <p>{{ telegram }}</p>
            </div>
            <div class="flex items-center gap-2">
                <Icon icon="mdi:github" class="w-6 h-6" />
                <p>{{ github }}</p>
            </div>
            <div class="flex items-center gap-2">
                <Icon icon="mdi:email" class="w-6 h-6" />
                <p>{{ gmail }}</p>
            </div>
        </div>
    </section>
</template>



<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useResumeData } from "../composables/useResumeData";

const { fullName, jobTitle, summary, birthday, placeOfResidence, phone, telegram, github, gmail } = useResumeData()

const cardRef = ref<HTMLElement | null>(null);

let currentX = 0;
let currentY = 0;
let targetX = 0;
let targetY = 0;
let animationFrame: number;

const lerp = (start: number, end: number, factor: number) =>
    start + (end - start) * factor;

const animate = () => {
    currentX = lerp(currentX, targetX, 0.05);
    currentY = lerp(currentY, targetY, 0.05);

    if (!cardRef.value) return;

    const shadowX = -currentX * 20;
    const shadowY = -currentY * 20;

    cardRef.value.style.boxShadow =
        `${shadowX}px ${shadowY}px 60px rgba(0,0,0,0.55)`;

    const rotateY = currentX * 5;
    const rotateX = -currentY * 5;

    cardRef.value.style.transform =
        `perspective(900px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    scale(0.99)`
        ;

    animationFrame = requestAnimationFrame(animate);
};

const handleMouseMove = (event: MouseEvent) => {
    if (!cardRef.value) return;

    const rect = cardRef.value.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    targetX = (x - centerX) / centerX;
    targetY = (y - centerY) / centerY;
};

const resetCard = () => {
    targetX = 0;
    targetY = 0;
};

onMounted(() => {
    animate();
});

onBeforeUnmount(() => {
    cancelAnimationFrame(animationFrame);
});
</script>