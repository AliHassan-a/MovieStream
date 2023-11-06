<template>
  <div
    class="h-[100vh] bg-[url('~/assets/card/Player-action-screen.png')] bg-no-repeat bg-cover bg-center relative"
  >
  <div class="backBtn text-white p-[1.5rem]">
    <NuxtIcon name="arrow-left" filled=""/>
    <img src="~/assets/icons/arrow.png" alt="" width="24px"  @click="$router.back()" class="cursor-pointer">
  </div>
  <div class="videoPlayer flex flex-col justify-center items-center py-[20px] ab">
    <video-player
    class="absolute"
      src="https://vjs.zencdn.net/v/oceans.mp4"
      poster="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaUQqp1O01gpOYypnNlGe_W-BzCul99IU2GMqKVR_jGqbpLl3iswwLU5AMcad1q9DScLo&usqp=CAU"
      controls
      :loop="false"
      :volume="0.6"
      @mounted=""
      @ready=""
      @play=""
      @pause=""
      @ended=""
      @seeking=""
    />
  </div>
  
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
const router = useRouter()
defineComponent({
    components: {
      VideoPlayer
    }
  })
</script>

<style>
.bgImg {
  background-image: "~/assets/card/Player-action-screen.png";
}
.vjs-big-play-button{
    top: 50% !important;
    left: 50% !important;
}
</style>
