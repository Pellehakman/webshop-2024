<script src="./sortingNav.ts" lang="ts"></script>

<template>
  <div class=" overflow-y-scroll w-full flex gap-2 py-2 px-2">
    <div class="sortingItem_active bg-rose-600">All</div>
    <div class="sortingItem">Burgers</div>
    <div class="sortingItem">Chicken</div>
    <div class="sortingItem">Pizza</div>
    <div class="sortingItem">Fish</div>
    <div class="sortingItem">Sallads</div>
    
    
    
   

  
  </div>
</template>
<style>
.sortingItem{
  @apply bg-white font-black px-6 py-2 shadow-md border border-gray
}

.sortingItem_active{
  @apply bg-rose-600 font-black px-6 text-white py-2 shadow-md border border-gray
}
</style>
