<script src="./siteItems.ts" lang="ts"></script>

<template>
<article>
            <section class="item flex drop-shadow-lg rounded-sm">
                <div class="item-details bg-white w-2/3 p-4 ">
                  <div class="flex items-center">
                    <h1 class="font-bold text-lg">{{ props.title }}</h1>                             
                    <!-- <div class="rating-container">
                      <font-awesome-icon v-for="index in 5" :key="index" class="text-xs" :class="getStarClass(index)" icon="fa-solid fa-star" />
                    </div> -->
                  </div>
                  <div class="flex items-center ">

                    <p class="text-base pr-4 description-text line-clamp-3">{{ props.description }}</p>
                    <!-- <img class="w-1/3 h-16 object-cover rounded-sm drop-shadow-lg " :src="props.imageURL"/> -->
                  </div>
                    
                    <!-- <div class="flex justify-between items-center ">
                    <h2 class="text-lg">${{ props.price }}</h2>
                    <div class=" flex justify-end pt-4">
                        <button class="px-6 py-2 bg-blue-600 font-bold text-white">Add to cart</button>
                    </div>
                    
                  </div> -->
                </div>
                <div class="w-1/3 overflow-hidden bg-white flex items-center justify-center">
                  <img :src="props.imageURL" />
                </div>
            </section>
            
        </article>
</template>
<style>

.rating-container{
  @apply ml-2 
  /* [&>*:nth-child(3)]:text-blue-600 */
}

</style>
