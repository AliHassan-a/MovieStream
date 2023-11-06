<template>
  <div class="dashboardParent h-[100vh] overflow-y-auto pt-[92px]">
    <div class="px-[32px] py-[16px]">
      <div class="trending flex flex-col items-start pb-[32px]">
        <h1 class="text-white text-[18px] pb-[16px]">Trending</h1>
        <div class="cards flex items-center justify-start gap-4 flex-wrap">
          <div v-for="(trendingData, index) in trendingData">
            <CommonCard :cardData="trendingData" @click="handleClickAlbum(trendingData)" />
          </div>
        </div>
      </div>
      <TrendingAlbumDetails :selectedAlbumData="selectedAlbum" v-if="selectedAlbum" />
    </div>
  </div>
</template>

<script setup>
import BulletScience from "~/assets/card/BulletScience.png";
import { useTrendingData } from "~/composables/useGlobalData.js"
const trendingData = useTrendingData();
console.log(trendingData.value);
const selectedAlbum = useState(() => null);
const handleClickAlbum = (album) => {
  selectedAlbum.value = album;
}


</script>
