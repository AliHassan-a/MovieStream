<template>
  <div
    class="flex flex-row items-center justify-between p-[32px] text-white w-full max-[610px]:flex-col max-[610px]:gap-4"
  >
    <div
      class="left flex gap-8 w-[50%] max-[610px]:w-[100%] items-center justify-start"
    >
      <NuxtIcon
        name="left-align_3725913"
        class="hidden max-[767px]:block cursor-pointer"
        @click="toggleSidebar"
      />
      <div class="cursor-pointer">Movies</div>
      <div class="cursor-pointer">Series</div>
      <div class="cursor-pointer">Documentaries</div>
    </div>
    <div
      class="right flex gap-8 text-white items-center w-[50%] max-[610px]:w-[100%] max-[610px]:justify-between justify-end"
    >
      <div class="topIcons flex gap-8">
        <div class="cursor-pointer">
          <NuxtIcon name="search" filled="" class="text-[20px]" />
        </div>
        <div class="cursor-pointer">
          <NuxtIcon name="bell" filled="" class="text-[20px]" />
        </div>
      </div>
      <div class="cursor-pointer flex items-center text-[32px] gap-[8px]">
        <NuxtIcon name="profileIcon" filled="" />
        <div class="profileName text-[16px]">Tetiana</div>
      </div>
    </div>
  </div>
  {{ console.log("Is Open ", isOpen) }}
</template>

<script setup>
import { useIsOpen } from "~/composables/useGlobalData";
const isOpen = useIsOpen();
const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>
