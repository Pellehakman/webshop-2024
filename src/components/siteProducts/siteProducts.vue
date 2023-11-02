<script src="./siteProducts.ts" lang="ts"></script>

<template>
  <div class="bg-slate-100 flex p-4 gap-4 flex-col justify-center flex-wrap">
    <div v-for="(item, id) in db" :key="id">
      <siteItems
        :id="item.id"
        :imageURL="item.imageURL"
        :title="item.title"
        :description="item.description"
        :price="item.price"
        :ingredients="item.ingredients"
      />
    </div>
  </div>
</template>
