<template>
  <div class="flex w-[100%]">
    <CommonSideBar
      class="w-[20%] max-[900px]:w-[40%] hidden min-[768px]:block"
    />
    <div class="overlay" 
    :class="sidsebarToggle()"
    @click="isOpen = !isOpen"
    ></div>
      <CommonSideBar
        class="w-[20%] max-[768px]:w-[60%] max-[767px]:absolute z-50"
        :class="sidsebarToggle()"
      />
  
    <!-- <div class="w-[80%] box-border" :class="dynamicClass()"> -->
    <div class="w-[80%] max-[768px]:w-[100%] box-border bg-[#26231f]">
      <div
        class="fixed bg-[#26231F] opacity-80"
        style="width: -webkit-fill-available"
      >
        <HomeScreenHomeHeader />
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useIsOpen } from "~/composables/useGlobalData";
const isOpen = useIsOpen();
const sidsebarToggle = () => {
  if (isOpen.value) {
    return "block";
  } else {
    console.log("IS open", isOpen);
    return "hidden";
  }
};
</script>

<style>
.custom-gradient {
  background: conic-gradient(
    from -2deg at 28.99% 107.28%,
    #37312a 175.51443457603455deg,
    #191817 342.4887156486511deg,
    #191817 360deg
  );
}
.sidebarToggle {
  display: none;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  display: none;
  transition: opacity 0.3s;
}
.overlay.block {
  display: block;
}

</style>
