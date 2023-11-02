<script src="./siteItems.ts" lang="ts"></script>

<template>
  
  <div class=" relative bg-slate-500 h-40 overflow-hidden ">
    <img class=" bg-no-repeat  " :src="props.imageURL" />
    hej 
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
