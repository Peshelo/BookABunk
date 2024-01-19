<template>
    <NuxtLayout name="main">       
        <!-- Search Bar -->
        <!-- Grid view - property cards with infinite scroll -->
        <p v-if="pending">Loading...</p>
        <p v-else-if="error">Error: {{ error.message }}</p>
        <div v-else class="w-screen grid grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-1 gap-4 p-4">
            <!-- House Card -->
            <HouseCard v-for="(house,index) in properties.content" :house="house" @click="selectHouse(house)"/>
            <div>
                
    <USlideover v-model="isOpen">
      <UCard class="flex flex-col flex-1 overflow-scroll" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-800 dark:divide-gray-800' }">
        <template #header>
          <Placeholder class="h-8" />
          <h1 class="text-md">{{ currentHouse.address }}</h1>
        </template>

        <Placeholder class="h-full" />
        <!-- Images -->
        <div class="grid grid-cols-2 gap-2">
            <!-- <div class="grid grid-cols-1 gap-2">
                <img :src="currentHouse.imageUrls[0]" class="w-full h-48 object-cover rounded-t-lg"/>
            </div> -->
            <img v-for="image in currentHouse.imageUrls" :src="image" class="w-full h-48 object-cover rounded-t-lg" loading="lazy"/>
        </div>
        <!-- House Details -->
        <div class="w-full">
            <h1>{{ currentHouse.propertyType }}</h1>
            <p>{{ currentHouse.address }}</p>
            <p><b>${{ currentHouse.price }}</b></p>

        </div>
        <div>

        </div>
        <!-- Details -->
        <template #footer>
          <Placeholder class="h-8" />
        </template>
      </UCard>
    </USlideover>

  </div>

        </div>
        <!-- <p ></p> -->
    </NuxtLayout>
</template>

<script setup>
const isOpen = ref(false)
const currentHouse = ref(null)
    const colorMode = useColorMode();
    const isDark = computed(() => colorMode.value === "light");
    // colorMode.preference = "light";
    const toggleColorMode = () => {
        isDark.value = !isDark.value;
        colorMode.preference = isDark.value ? "light" : "dark";
    };

    const { data: properties,pending,error } = await useFetch('http://localhost:8080/api/properties?pageSize=10&pageNumber=0&offset=0')
    const selectHouse = (house) => {
        isOpen.value = true
        console.log(house)
        currentHouse.value = house
        // router.push(`/houses/${house.id}`)
    }
</script>

<style lang="scss" scoped>

</style>