<template>
    <NuxtLayout name="main">
        <p v-if="pending" class="text-center text-lg">Loading...</p>
        <div v-else-if="error" class="text-red-500 text-center text-lg">
            <p>House not found</p>
            <button @click="refresh" class="border border-red-400 bg-red-200 text-sm my-4 px-2 rounded-xl">Retry</button>
        </div>
        <div v-else class="my-20">
            <!-- Image Overlay -->
        <div v-if="isGalleyOpen" class="fixed flex flex-col gap-4 justify-center items-center overflow-y-auto top-0 left-0 backdrop-brightness-50 w-screen h-screen top-50" @click.self="isGalleyOpen = !isGalleyOpen">
                <img :src="currentImage" class="w-[900px] h-[500px] object-cover rounded-t-lg" loading="lazy"/>
                <div id="images" class="flex flex-row overflow-x-auto w-[900px] gap-2">
                    <img v-for="image in house.imageUrls" :src="image" :class="currentImage==image ? 'border-2 border-[var(--primary)]': ''" class="w-full h-[200px] object-cover rounded-t-lg" loading="lazy" @click="selectImage(image)"/>
            </div>
            </div>
            <h1 class="text-xl mx-2 font-semibold">{{house.propertyType}}</h1>
            <p class="text-4xl  mx-2 my-5">{{house.address}}</p>
        <div class="">
            <div id="images" class="grid grid-cols-1 border-b pb-5 mb-5 gap-2">
                    <!-- <img v-for="image in house.imageUrls" :src="image" class="w-full h-56 object-cover rounded-t-lg" loading="lazy"/> -->
            <img :src="house.imageUrls[0]" class="w-full h-[500px] object-cover rounded-t-lg" loading="lazy"/>

            </div>
            <div id="details" class="grid grid-cols-3 max-md:grid-cols-1 max-md:mx-4">
                <div class="col-span-2 max-md:col-auto mr-5">
                    <!-- <h1 class="text-xl font-semibold">{{house.propertyType}}</h1>
                    <p class="text-[40px]">{{house.address}}</p>
                    <p class="text-lg">${{house.price}} / Month</p> -->
<div class="w-full border-b pb-5 mb-5">
    <p class="text-[30px] mb-5">What this place offers</p>
    <div class="grid grid-cols-5 max-md:grid-cols-2 divide-x gap-2 hover:shadow-none duration-150 border p-2 rounded-lg">
        <HousePropertyFeaturesCard :icon="'gis:measure-area'" :value="house.area" :type="'Area'"/>
             <HousePropertyFeaturesCard :icon="'material-symbols:other-houses-outline'" :value="house.bedrooms" :type="'Rooms'"/>
             <HousePropertyFeaturesCard :icon="'cil:bathroom'" :value="house.bathrooms" :type="'Bathrooms'"/>
             <HousePropertyFeaturesCard :icon="'streamline:travel-wayfinder-toilet-sign-man-woman-toilet-sign-restroom-bathroom-user-human-person'" :value="10" :type="'Gender'"/>
             <HousePropertyFeaturesCard :icon="'ion:male-outline'" :type="'Gender'"/>
             <HousePropertyFeaturesCard :icon="'material-symbols:wifi-rounded'" :type="'Wifi'"/>
             <HousePropertyFeaturesCard :icon="'material-symbols:water-drop-rounded'" :type="'Borehole'"/>
            </div>
</div>
                    <p class="text-[30px] mt-5">About place</p>
                    <p class="text-lg mr-4 max-md:mr-0 text-justify">{{house.description}}
                        Sitting on 2000 square. Metres furnished its optional
4 bedroomed all with insuits
Prolific borehole 
Modern fitted kitchen
Separate dining and lounge
2 lounges
Double automated garage
1 bed self contained cottage
Pool Borrowdale 
                    </p>
                    <div class="w-full border-y py-5 my-5">
    <p class="text-[30px] mt-5 my-2">Map - You will be here</p>
                    <img src="https://k8q3f6p8.rocketcdn.me/wp-content/uploads/2019/05/Google-Maps-Tips.png" class="w-full h-98 object-cover shadow-xl duration-75 rounded-t-lg" loading="lazy"/>
</div>
<div class="w-full border-y py-5 my-5">
    <p class="text-[30px] mt-5">Pictures</p>
    <div id="images" class="grid grid-cols-3 border-b pb-5 mb-5 gap-2">
                    <img v-for="image in house.imageUrls" :src="image" class="w-full h-56 object-cover hover:drop-shadow-xl duration-75 rounded-t-lg" loading="lazy" @click="selectImage(image)"/>
    </div>
</div>
                </div>
                <div class="col-span-1 max-md:col-auto h-fit border rounded-2xl shadow-2xl p-5">
                    <p class="text-[30px] border-b py-2 mb-2">${{house.price}}<sup class="text-sm"> / Month</sup></p>
                    <p class="text-[var(--primarydark)] my-2">Contact Details</p>
                    <NuxtLink :to="`/tenant/${house.propertyOwner.id}`" class="flex flex-row my-2 bg-[var(--primary)] hover:shadow-none p-2 pr-4 rounded-xl shadow-lg w-fit items-center gap-2">
            <div class="text-[var(--secondary)]"><img src="https://images.unsplash.com/photo-1536337005238-94b997371b40?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZGVudHMlMjBpbiUyMGNsYXNzfGVufDB8fDB8fHww" width="50" class="h-[40px] w-[40px] rounded-full object-cover shadow-xl"/></div>
            <p class="text-sm text-white">Posted by {{house.propertyOwner.username}}</p>
          </NuxtLink>
                    <p class="text-lg">Posted by {{house.propertyOwner.username}}</p>
                    <p class="text-lg">{{house.propertyOwner.email}}</p>
                    <button class="bg-[var(--primarydark)] hover:bg-[var(--secondaryyellow)] hover:text-black hover:gap-4 duration-150 group text-xl flex flex-row justify-center items-center gap-2 text-white p-4 w-full rounded-xl mt-4">
                        <Icon name="material-symbols:call" size="30"/>{{house.propertyOwner.phoneNumber}}
                    </button>
                </div>
            </div>
        </div>
        </div>
    </NuxtLayout>
</template>

<script setup>
 const { params } = useRoute();
 const currentImage = ref(null);
 const isGalleyOpen = ref(false);
 const selectImage = (image) => {
     currentImage.value = image;
     isGalleyOpen.value = true;
    
 }
 console.log(params.id);
 const {data:house,pending,error,refresh,status} = await useFetch(`http://localhost:8080/api/properties/${params.id}`)
</script>

<style lang="scss" scoped>

</style>