<template>
    <div class="h-screen w-screen flex flex-col justify-between items-center bg-gray-100 text-lg">
       <div><nuxt-link to="/"><img src="https://rapiddata.co.zw/wp-content/uploads/2022/12/logo-2.png" width="150" alt="" srcset=""></nuxt-link>
</div>
        <slot/>
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