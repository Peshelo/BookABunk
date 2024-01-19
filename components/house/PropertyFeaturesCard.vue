<template>
     <div class="w-full flex flex-col bg-white border shadow-lg rounded-lg text-2xl p-2 px-4 justify-center items-center gap-2">
            <div class="flex flex-row items-center justify-center gap-2">
                <Icon :name="icon" size="30px" class="text-[var(--primarydark)]"/>
                <p v-if="value != null" class="text-xl text-gray-400">{{ value }}</p>
            </div>
                <p class="text-xs text-gray-400">{{type}}</p>    
    </div>
</template>

<script setup>
defineProps({
    icon: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: false
    },
    type: {
        type: String,
        required: true
    },
})
 
</script>

<style lang="scss" scoped>

</style>