<template>
  <div
    class="bg-[url('~/assets/welcomePage/welcome.png')] bg-no-repeat bg-cover h-screen bg-center"
  >
    <div
      class="welcomeContent flex flex-col items-center justify-center w-full h-full gap-[40px]"
    >
      <div class="headingSection flex flex-col gap-5 w-full">
        <div
          class="logoSection flex items-center justify-center gap-2 text-center cursor-pointer"
        >
          <NuxtIcon name="coffee" class="text-2xl" filled=""></NuxtIcon>
          <h1 class="text-base text-white text-[22px]">Watch</h1>
        </div>
        <h1 class="text-white text-center text-[18px]">
          Enjoy the newest movies
        </h1>
      </div>
      <div
        class="buttonSection flex flex-col items-center justify-center gap-5"
      >
        <div
        @click="toHomePage()"
          class="text-white bg-[#6100C2] w-[210px] py-[14px] px-[20px] text-center rounded-[14px] cursor-pointer hover:bg-bannerBtn-gradient hover:text-[#6100C2] font-medium border-2 border-[#6100C2]"
        >
          Login
        </div>
        <div class="signupLink text-white text-[16px]">
          No account?
          <span class="font-bold cursor-pointer" 
            >Sign up</span
          >
        </div>
        <DashboardHeader />
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const toHomePage = (()=>{
router.push('/home')
})
</script>
