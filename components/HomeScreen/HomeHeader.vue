<template>
  <div class="flex items-center justify-between p-[32px] text-white">
    <div class="left flex gap-8">
      <div class="cursor-pointer">Movies</div>
      <div class="cursor-pointer">Series</div>
      <div class="cursor-pointer">Documentaries</div>
    </div>
    <div class="right flex gap-8 text-white items-center">
      <div class="cursor-pointer">
        <NuxtIcon name="search" filled="" class="text-[20px]"/>
      </div>
      <div class="cursor-pointer">
        <NuxtIcon name="bell" filled="" class="text-[20px]"/>
      </div>
      <div class="cursor-pointer flex items-center text-[32px] gap-[8px]">
        <NuxtIcon name="profileIcon" filled="" />
        <div class="profileName text-[16px]">Tetiana</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
