<template>
    <div class="dashboardParent h-[100vh] overflow-y-auto pt-[92px]">
      
  <div
    class="px-[32px] py-[16px]"
  >
    <div class="trending flex flex-col items-start">
      <h1 class="text-white text-[18px] font-semibold pb-[16px]">Favourites</h1>
      <div class="cards flex items-center justify-start gap-4 flex-wrap">
        <div v-for="(trendingData, index) in favourites">
          <CommonCard :cardData="trendingData" :width="348" :height="259"/>
        </div>
      </div>
    </div>
   
  </div>
  </div>
</template>
  <script setup>
  import { useFavourites } from "#imports";
  const favourites = useFavourites()
import Tokyo from "~/assets/card/Tokyo.png";
import BulletScience from "~/assets/card/BulletScience.png";

  // const favourites =[ {
  //   backgroundImg : BulletScience,
  //   favourite : true,
  //   title : "Bullet Science",
  //   year : "2022",
  //   type : "Action Comedy"

  // },
  // {
  //   backgroundImg : Tokyo,
  //   favourite : true,
  //   title : "Tokyo Train",
  //   year : "2022",
  //   type : "Action Comedy"

  // },
 
  // ]
</script>