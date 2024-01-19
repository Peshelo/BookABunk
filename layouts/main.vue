<template>
    <div class=" ">
   <MainTopNavBar/>
   <div class="max-w-[1200px] mx-auto">
    <slot/>

   </div>
        <div class="bottom bg-[var(--primary)] flex flex-row justify-center gap-1 items-center text-white text-sm w-full p-3"><a>About </a> .<a>Terms and Conditions</a> .<a>FAQ</a> .<a>Copyright 2023 Rapiddata</a></div>
    </div>

</template>

<script>
export default {

}
</script>

<style>
.bottom{
   bottom: 0;
   left:0;
}
</style>