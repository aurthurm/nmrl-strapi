<template>
    <article class="bg-gray-100 mb-4 ml-4">
      <div class="bg-white shadow-sm rounded-lg flex">
        <div>
          <div class="h-24 w-32 bg-cover rounded"
          :style="{backgroundImage: `url(${imageUrl})`}">
          </div>
        </div>
        <div class="pt-2 pl-4 pr-2 text-left">
          <h2 class="text-l text-gray-600 font-bold">{{title}}</h2>
          <p class="mt-2 text-gray-500 text-xs">{{excerpt}}</p>
        </div>
      </div>
    </article>
</template>

<script lang="ts">
export default {
    props: {
        title: String,
        excerpt: String,
        imageUrl: String,
    },
}
</script>
