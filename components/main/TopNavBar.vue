<template>
    <div class="flex flex-row justify-between items-center px-4">
        <!-- Top Bar -->
        <nuxt-link to="./"><img src="https://rapiddata.co.zw/wp-content/uploads/2022/12/logo-2.png" width="150" alt="" srcset=""></nuxt-link>
        <div class="flex flex-row gap-5">
            <nuxt-link to="/auth/login" class="text-[var(--secondary)] border-b-2 border-transparent hover:border-[var(--primary)] p-4">Houses</nuxt-link>
            <nuxt-link to="/auth/register" class="text-[var(--secondary)] border-b-2 border-transparent hover:border-[var(--primary)] p-4">Favourites</nuxt-link>

        </div>
        <nuxt-link to="/auth/login" class="text-[var(--secondary)]"><img src="https://images.unsplash.com/photo-1536337005238-94b997371b40?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZGVudHMlMjBpbiUyMGNsYXNzfGVufDB8fDB8fHww" width="50" class="h-[40px] w-[40px] rounded-full object-cover drop-shadow-xl"/></nuxt-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>