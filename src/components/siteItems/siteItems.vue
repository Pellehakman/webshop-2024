<script src="./siteItems.ts" lang="ts"></script>

<template>
  <div class="siteItem" v-if="showItem">
    <div class="flex flex-col">
      <h1>{{ props.title }}</h1>
      <p>{{ props.description }}</p>
      {{ props.price }}
      <button class="border p-4" @click="closeProduct">stäng</button>
    </div>
  </div>
  <article>
    <section @click="clickProduct(props.id)" class="item flex drop-shadow-lg rounded-sm">
      <div class="item-details bg-white w-2/3 p-4">
        <div class="flex items-center">
          <h1 class="font-black uppercase text-lg">{{ props.title }}</h1>
          <!-- <div class="rating-container">
                      <font-awesome-icon v-for="index in 5" :key="index" class="text-xs" :class="getStarClass(index)" icon="fa-solid fa-star" />
                    </div> -->
        </div>
        <div class="flex items-center">
          <p class="text-base font-extralight pr-4 description-text line-clamp-3">
            {{ props.description }}
          </p>
          <!-- <img class="w-1/3 h-16 object-cover rounded-sm drop-shadow-lg " :src="props.imageURL"/> -->
        </div>

        <div class="flex justify-between items-center pt-4">
          <h2 class="text-lg font-black">${{ props.price }}</h2>
        </div>
      </div>
      <div class="w-1/3 overflow-hidden bg-white flex items-center justify-center">
        <img class="w-full h-full object-cover" :src="props.imageURL" />
      </div>
      <div class="flex justify-end pt-4 absolute right-0 bottom-0">
        <button class="px-6 py-2 m-4 bg-blue-400 font-bold text-white">Add to cart</button>
      </div>
    </section>
  </article>
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
