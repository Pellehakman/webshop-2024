<script src="./siteItems.ts" lang="ts"></script>

<template>
  <div class="border border-gray drop-shadow-md   rounded-lg bg-white">
    <div class="absolute flex flex-col gap-2 left-0 top-2 z-20 ">
      <span class="bg-red-500  py-1 px-4 flex items-center text-white">Kampanj!</span>
      

    </div>


    <div class="w-full flex justify-center relative">
      <img class="w-full object-cover h-24" :src="props.imageURL" />

      <div class="h-12 w-full absolute bottom-0 bg-gradient-to-t"></div>
    </div>
    <div class="flex flex-col mb-2 p-3">
      <h1 class="text-md font-black uppercase">{{ props.title }}</h1>
      <span class="text-sm ">{{ props.description }}</span>      
    </div>
    

    <button class="bg-black text-white text-sm font-bold w-full py-4">
      <font-awesome-icon class="text-white px-2" icon="fa-solid fa-cart-shopping" />
      <span>ADD TO CART</span>
      <span class="px-2">(${{props.price}})</span>
    </button>
  </div>
</template>
<style>
.siteItem {
  @apply fixed top-0 left-0 w-full h-full flex items-center justify-center bg-blue-700 overflow-hidden;
  color: #fff; /* Change text color as needed */
  z-index: 9999; /* Ensure it's on top of other elements */
}
.rating-container {
  @apply ml-2 
  /* [&>*:nth-child(3)]:text-blue-600 */;
}
</style>
