<template>
  <div class="flex w-[100%]">
    <CommonSideBar class="w-[20%]" />
    <!-- <div class="w-[80%] box-border" :class="dynamicClass()"> -->
    <div class="w-[80%] box-border bg-[#26231f] ">
      <div class="fixed bg-[#26231F] opacity-80" style="width: -webkit-fill-available">
        <HomeScreenHomeHeader />
      </div>
      <slot />
    </div>
  </div>
</template>

<script setup>
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
</style>
