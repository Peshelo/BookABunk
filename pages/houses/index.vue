<template>
    <NuxtLayout name="main">       
        <!-- Search Bar -->
        <!-- Grid view - property cards with infinite scroll -->
        <!-- Loading State with skeletons -->
        <div v-if="pending" class="w-full grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 p-4">
            <!-- Skeleton House Card -->
            <HouseSkeletonHouseCard/>
            <HouseSkeletonHouseCard/>
            <HouseSkeletonHouseCard/>
            <HouseSkeletonHouseCard/>
            <HouseSkeletonHouseCard/>
            <HouseSkeletonHouseCard/>
            <HouseSkeletonHouseCard/>
            <HouseSkeletonHouseCard/>
            <HouseSkeletonHouseCard/>
            <HouseSkeletonHouseCard/>
        </div>
    
        <div v-else-if="error" class="text-[var(--primary)] text-sm text-center m-10">
          <p>Error: Failed to fetch houses</p>
          <button @click="refresh" class="border border-red-400 bg-red-200 text-sm my-4 px-2 rounded-xl">Retry</button>
        </div>
        <div v-else class="w-full grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 p-4">
            <!-- House Card -->
            <HouseCard v-for="(house,index) in properties.content" :house="house" @click="selectHouse(house)"/>
            <HouseCard v-for="(house,index) in properties.content" :house="house" @click="selectHouse(house)"/>
            <HouseCard v-for="(house,index) in properties.content" :house="house" @click="selectHouse(house)"/>
          <div>
       
    <!-- Slideover -->
    <USlideover v-model="isHouseOpen" :width="'xl'">
      <UCard class="flex flex-col flex-1 overflow-scroll" :ui="{body: { base: 'flex-1', xl: 'w-[800px]' }, ring: '', divide: 'divide-y divide-gray-800 dark:divide-gray-800' }">
        <template #header>
          <!-- <Placeholder class="h-8" /> -->
          <h1 class="text-md text-bold">{{ currentHouse.address }}</h1>
        </template>

        <!-- <Placeholder class="h-full" /> -->
        <!-- Images -->
        <div class="grid grid-cols-2 gap-2">
            <!-- <div class="grid grid-cols-1 gap-2">
                <img :src="currentHouse.imageUrls[0]" class="w-full h-48 object-cover rounded-t-lg"/>
            </div> -->
            <img v-for="image in currentHouse.imageUrls" :src="image" class="w-full h-48 object-cover rounded-t-lg" loading="lazy"/>
        </div>
        <!-- House Details -->
        <div class="w-full my-4">
          <div class="flex flex-row bg-[var(--primary)] p-2 pr-4 rounded-xl drop-shadow-xl w-fit items-center gap-2">
            <NuxtLink to="/tenants/" class="text-[var(--secondary)]"><img src="https://images.unsplash.com/photo-1536337005238-94b997371b40?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZGVudHMlMjBpbiUyMGNsYXNzfGVufDB8fDB8fHww" width="50" class="h-[40px] w-[40px] rounded-full object-cover drop-shadow-xl"/></NuxtLink>
            <p class="text-sm text-white">Posted by {{currentHouse.propertyOwner.username}}</p>
          </div>
            <h1 class="my-2 text-lg">{{ currentHouse.propertyType }}</h1>
            <p class="text-2xl text-gray-500">{{ currentHouse.address }}</p>
            <p class="text-2xl my-5"><b>${{ currentHouse.price }}</b> / Month</p>
            <p>This house has: </p>
            <div class="grid grid-cols-4 divide-x gap-2 shadow-xl hover:shadow-none duration-150 border p-2 rounded-lg">
             <HousePropertyFeaturesCard :icon="'material-symbols:other-houses-outline'" :value="5" :type="'Rooms'"/>
             <HousePropertyFeaturesCard :icon="'cil:bathroom'" :value="1" :type="'Bathrooms'"/>
             <HousePropertyFeaturesCard :icon="'streamline:travel-wayfinder-toilet-sign-man-woman-toilet-sign-restroom-bathroom-user-human-person'" :value="10" :type="'Gender'"/>
             <HousePropertyFeaturesCard :icon="'ion:male-outline'" :type="'Gender'"/>
             <HousePropertyFeaturesCard :icon="'material-symbols:wifi-rounded'" :type="'Wifi'"/>
             <HousePropertyFeaturesCard :icon="'material-symbols:water-drop-rounded'" :type="'Borehole'"/>
            </div>
        </div>
        <div>

        </div>
        <!-- Details -->
        <template #footer>
          <!-- <Placeholder class="h-8" /> -->
          <h2 class="text-md text-bold">Contact Details</h2>
          <p class="text-md text-bold">Username: {{ currentHouse.propertyOwner.username}}</p>
          <p class="text-md text-bold">Email: {{ currentHouse.propertyOwner.email}}</p>
          <NuxtLink to="/tenants/" class="text-white w-full bg-[var(--secondary)] p-2 mt-4 rounded-lg">Check Other properties</NuxtLink>
        </template>
      </UCard>
    </USlideover>

  </div>

        </div>
        <!-- <p ></p> -->
    </NuxtLayout>
</template>

<script setup>
const isHouseOpen = ref(false)
const isFilterOpen = ref(false)
const router = useRouter();
const currentHouse = ref(null)
    const colorMode = useColorMode();
    const isDark = computed(() => {
      colorMode.value === "light"
  });
    // colorMode.preference = "light";
    const toggleColorMode = () => {
        isDark.value = !isDark.value;
        colorMode.preference = isDark.value ? "light" : "dark";
    };

    const { data: properties,pending,error,refresh } = await useFetch('http://localhost:8080/api/properties?pageSize=10&pageNumber=0&offset=0')
    const selectHouse = (house) => {
        // isHouseOpen.value = true
        console.log(house)
        currentHouse.value = house
        router.push(`/houses/${house.id}`)
    }
</script>

<style lang="scss" scoped>

</style>