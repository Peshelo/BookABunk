<template>
    <div class="border border-gray-300 rounded-2xl pb-2hover:shadow-xl duration-200">
        <!-- Image  with like overlay -->
        <img :src="house.imageUrls.length > 0 ? house.imageUrls[0]:'https://a0.muscache.com/im/pictures/641860ad-1c43-4908-8b73-eec44d2cafe6.jpg'" loading="lazy" alt="House Image'" class="w-full h-48 object-cover rounded-t-lg"/>
        <!-- House details -->
        <div class="flex flex-col p-4">
            <h1>
  {{
    house.propertyType == null
      ? "Property Type"
      : house.propertyType.length > 20
      ? house.propertyType.slice(0, 20) + "..."
      : house.propertyType
  }}
</h1>            <p class="text-xs text-gray-400">
  {{
    house.address == null
      ? "Address"
      : house.address.length > 20
      ? house.address.slice(0, 20) + "..."
      : house.address
  }}
</p>            <div class="w-full text-sm mt-6 flex flex-row justify-between">
                <p><b>${{house.price}}</b><sup> /month</sup></p>
                <p><Icon name="material-symbols:kid-star-sharp"/> 5.0</p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    house: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss" scoped>

</style>