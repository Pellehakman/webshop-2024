<script src="./siteItems.ts" lang="ts"></script>

<template>
<article>
            <section class="item">
                <div class="item-details bg-white p-4 drop-shadow-lg rounded-sm">
                  <div class="flex items-center">
                    <h1 class="font-bold text-lg">{{ props.title }}</h1>
                   

                     
                    <div class="rating-container">
    <font-awesome-icon v-for="index in 5" :key="index" :class="getStarClass(index)" icon="fa-solid fa-star" />
  </div>
                      
                  
                  
                   
                  </div>
                    
                    <p class="w-2/3">{{ props.description }}</p>
                    <div class="flex justify-between items-center ">
                    <h2 class="text-lg">${{ props.price }}</h2>
                    <div class=" flex justify-end pt-4">
                        <button class="px-6 py-2 bg-blue-600 font-bold text-white">Add to cart</button>
                    </div>
                  </div>
                </div>
            </section>
        </article>
 
 
</template>
<style>

.rating-container{
  @apply ml-4 
  /* [&>*:nth-child(3)]:text-blue-600 */
}

</style>
