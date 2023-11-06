<template>
  <div
    class="wrapper text-white bg-[#21201E] h-[100vh] box-bordern p-[30px] min-w-[1600px]:p-[40px] flex flex-col items-start overflow-y-auto shadow-custom z-10"
  >
    <div class="logo ">
      <NuxtLink to="/" class="flex gap-2 text-center cursor-pointer items-center">
        <NuxtIcon name="coffee" filled="" class="text-[24px] watchIcon"/>
      <div class="text-base text-white text-[22px] font-bold">WATCH</div>
      </NuxtLink>

    </div>
    <div class="topSection py-[48px] min-w-[1600px]:py-[58px]  flex flex-col min-w-[1600px]:gap-8 gap-7" >
      <NuxtLink to="/home" class="homeBtn flex items-center gap-3 cursor-pointer">
        <NuxtIcon name="film" filled="" class="text-[20px] opacity-100" />
        <div class="home text-base">Home</div>
      </NuxtLink>
      <NuxtLink to="favourites" class="favBtn flex items-center gap-3 cursor-pointer" >
        <NuxtIcon name="heart" filled=""  class="text-[20px]"/>
        <div class="favourite  text-base">Favourites</div>
      </NuxtLink>
      <NuxtLink to="trending" class="trendingBtn flex items-center gap-3 cursor-pointer">
        <NuxtIcon name="trending-up" filled="" class="text-[20px]"/>
        <div class="Trending opacity-80 text-base">Trending</div>
      </NuxtLink>
      <div class="comingSoonBtn flex items-center gap-3 cursor-pointer">
        <NuxtIcon name="calendar" filled="" class="text-[20px]"/>
        <div class="comingSoon opacity-80 text-base">Coming soon</div>
      </div>
    </div>
    <div class="centerSection topSection py-[54px] min-w-[1600px]:py-[64px] flex flex-col min-w-[1600px]:gap-8 gap-7">
      <div class="communityBtn flex items-center gap-3 cursor-pointer">
        <NuxtIcon name="users" filled="" class="text-[20px]"/>
        <div class="community opacity-80 text-base">Community</div>
      </div>
      <div class="socialBtn flex items-center gap-3 cursor-pointer">
        <NuxtIcon name="message-circle" filled="" class="text-[20px]"/>
        <div class="social opacity-80 text-base">Social</div>
      </div>
    </div>
    <div class="centerSection bottomSection py-[54px] min-w-[1600px]:py-[64px] flex flex-col min-w-[1600px]:gap-8 gap-7">
      <div class="settingsBtn flex items-center gap-3 cursor-pointer">
        <NuxtIcon name="settings" filled="" class="text-[20px]"/>
        <div class="settings opacity-80 text-base">Settings</div>
      </div>
      <div class="socialBtn flex items-center gap-3 cursor-pointer">
        <NuxtIcon name="log-out" filled="" class="text-[20px]"/>
        <div class="logout opacity-80 text-base">Logout</div>
      </div>
    </div>
    {{ console.log("Menu Clicked",menuClicked)
     }}
  </div>
</template>

<script setup>
var menuClicked = false
</script>
<style>
.watchIcon{
  font-size: 24px;
}
</style>
