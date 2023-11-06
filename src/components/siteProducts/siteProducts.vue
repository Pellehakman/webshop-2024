<script src="./siteProducts.ts" lang="ts"></script>

<template>
  <div class=" flex flex-wrap px-1">
    <div v-for="(item, id) in db" :key="id" class="w-1/2 ">
      <siteItems
        :id="item.id"
        :imageURL="item.imageURL"
        :title="item.title"
        :description="item.description"
        :price="item.price"
        :ingredients="item.ingredients"
        class="text-xs m-1"

      />
    </div>
  </div>
</template>
