<template>
    <NuxtLayout name="auth">
    <div class="flex flex-col items-center gap-y-2">
      <h1 class="text-4xl text-[var(--secondary)] mmedium">Choose account type</h1>
      <p class="text-xs w-1/2 text-center text-gray-500">Hello there! Thank you for choosing us. Register an account and able to find what you are looking for.</p>
      <div class="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-5 gap-x-10 mt-10">
        <div class="flex flex-col text-center">
                <nuxt-link to="./register" class="shadow-lg p-10 rounded-md bg-white hover:border-[var(--secondary)] text-[var(--secondary)] duration-300 border-4">Agent account</nuxt-link>
                <p class="text-sm text-gray-400 mt-2">I want to host a boarding house on the platform</p>
        </div>
        <div class="flex flex-col text-center">
          <!-- // TODO: Change this to studentSignup.vue -->
                <nuxt-link to="./" class="shadow-lg p-10 rounded-md bg-white hover:border-[var(--secondary)] text-[var(--secondary)] duration-300 border-4">Student account</nuxt-link>
                <p class="text-sm text-gray-400 mt-2">I am looking for a boarding house</p>
        </div>
      </div>
    </div>
  </NuxtLayout>
  </template>
  
  <script>
  export default {
  layout: "auth"
  }
  </script>
  
  <style>
  
  </style>