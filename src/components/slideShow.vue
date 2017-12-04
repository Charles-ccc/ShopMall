<template>
    <div class="dlide-show" @mouseover="clearInv" @mouseout="runInv">
        <div class="slide-img">
            <a :href="slides[nowIndex].href">
                <transition name="slide-trans">
                    <img v-if="isShow" :src="slides[nowIndex].src">
                </transition>
                <transition name="slide-trans-old">
                    <img v-if="!isShow" :src="slides[nowIndex].src">
                </transition>
            </a>
        </div>
        <h2>{{ slides[nowIndex].title }}</h2>
        <ul class="slide-pages">
            <li @click="goto(prevIndex)">&lt;</li>
            <li v-for="(item, index) in slides" :key="index"
            @click="goto(index)"
            >
                <a :class="{on: index === nowIndex}">{{ index + 1 }}</a>
            </li>
            <li @click="goto(nextIndex)">&gt;</li>
        </ul>
    </div>
</template>

<style scoped>

</style>

<script>
export default {
  
}
</script>
