<template>
  <div :style="{ backgroundImage: `url(${cardData?.backgroundImg})`,width:`${width
  }px`,height:`${height}px` }"
    class="cardContainer bg-no-repeat bg-cover bg-center border border-gray-400 rounded-[20px] cursor-pointer w-[255px] h-[301px] max-[1440px]:w-[270px] max-[1440px]:h-[325px] max-[900px]:w-[208px] max-[900px]:h-[300px]  max-[503px]:w-[270px]  ">
    <div class="cardContent flex flex-col  justify-between h-[100%]">
      <div class="favtIcon flex items-center justify-end p-[20px]">
        <NuxtIcon :name="cardData?.favourite ? 'filledHeart' : 'purpleHeart'" filled=""
          class="p-[9px] bg-bannerBtn-gradient rounded-lg cursor-pointer text-[14px] text-center" 
          @click="cardData.favourite=!cardData?.favourite"
          />
      </div>
      <div class="genre flex flex-col justify-end text-black p-[20px] bg-bannerBtn-gradient rounded-b-2xl">
        <div class="name font-semibold text-[16px]">{{ cardData?.title }}</div>
        <div class="yearType font-normal text-[14px]"><span>{{ cardData?.year }}</span> | <span>{{ cardData?.type }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  cardData: {
    type: [Object]
  },
  width:{
    type:Number,
  },
  height:{
    type:Number,
  },
})
const { cardData,width,height } = props
</script>
