<template>
  <div>
    <div class="albumDetails flex items-center justify-start w-full gap-[1rem]">
      <div class="albumPoster w-[50%]">
        <img :src="`${selectedAlbumData?.backgroundImg}`" />
      </div>
      <div class="albumDetails w-[50%] flex items-center justify-start flex-col gap-[1.5rem]">
        <div class="topHead flex items-center justify-between w-full">
          <div class="genre text-white">
            <div class="title font-semibold text-[32px]">
              {{ selectedAlbumData?.title }}
            </div>
            <div class="genreDetails text-white flex justify-between gap-3">
              <div class="year">{{ selectedAlbumData?.year }}</div>
              <div class="type">{{ selectedAlbumData?.type }}</div>
              <div class="duration">{{ selectedAlbumData?.duration }}</div>
            </div>
          </div>
          <div class="ratings flex items-center gap-[8px]">
            <NuxtIcon name="star" filled="" class="text-[24px]" />
            <div class="numbers text-white text-[18px]">
              {{ selectedAlbumData?.rattings }}/10
            </div>
          </div>
        </div>
        <div class="overView">
          <h1 class="text-white tex-[16px] font-normal">
            {{ selectedAlbumData?.overView }}
          </h1>
        </div>
        <div class="watchSection flex items-start justify-start w-full gap-[1.2rem]">
          <NuxtLink to="player">
            <div
          class="text-white text-[17px] px-[24px] py-[14px] cursor-pointer bg-[#6100C2] text-center font-medium rounded-2xl hover:bg-bannerBtn-gradient hover:text-[#6100C2] border-2 border-[#6100C2]"
        >
          Watch now
        </div>
          </NuxtLink>
      
        <NuxtIcon :name="favourite ? 'filledHeart':'purpleHeart'" filled="" class="text-[24px] cursor-pointer p-[14px] bg-bannerBtn-gradient rounded-[14px]" @click="toggleFavourite"/>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue";

const props = defineProps({
  selectedAlbumData: {
    type: [Object],
  },
});
const { selectedAlbumData } = toRefs(props);
const favourite = ref(false);
const toggleFavourite= ()=>{
favourite.value = !favourite.value
}
</script>

<style lang="scss" scoped></style>
