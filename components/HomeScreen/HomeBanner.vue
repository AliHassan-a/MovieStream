<template>
  <div
    class="bannerParent bg-[url('~/assets/dashboard/bannerBg.png')] h-[65vh] min-w-[1600px]:h-[50vh] bg-no-repeat bg-cover bg-center flex p-[32px]"
  >
    <div class="latestRelease flex flex-col justify-end gap-y-8">
      <div class="headings">
        <div class="title text-white text-[48px] font-semibold">Insider</div>
        <div class="genre text-white text-[14px]">
          2022 | Comedy horror | 1 Season
        </div>
      </div>
      <div class="watchSection flex items-center justify-between">
        <NuxtLink to="/player">
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
</template>

<script setup>
const favourite = ref(false);
const toggleFavourite= ()=>{
favourite.value = !favourite.value
}
</script>
