<template>
  <div
    class="px-[32px] py-[16px]"
  >
    <div class="trending flex flex-col items-start pb-[32px]">
      <h1 class="text-white text-[18px] pb-[16px] font-semibold">Trending</h1>
      <div class="cards flex items-center justify-start gap-4 flex-wrap">
        <div v-for="(trendingData, index) in trending">
          <CommonCard :cardData="trendingData" @click=""/>
        </div>
      </div>
    </div>
    <div class="trending flex flex-col items-start">
      <h1 class="text-white text-[18px] pb-[16px] font-semibold">Continue Watching</h1>
      <div class="cards flex items-center justify-start gap-4 flex-wrap">
        <div v-for="(continueWatchingData, index) in continueWatching">
          <CommonCard :cardData="continueWatchingData" :width="348" :height="209"/>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script setup>
import {useTrendingData} from '~/composables/useGlobalData'
import {useContinueWatching} from '~/composables/useGlobalData'
const trending = useTrendingData()
const continueWatching = useContinueWatching()

</script>
