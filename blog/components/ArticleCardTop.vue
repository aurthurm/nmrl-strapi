<template>
  <article class="bg-white rounded shadow-lg mx-2">
    <div class="w-full h-32 bg-top bg-cover rounded-t"
     :style="{backgroundImage: `url(${imageUrl})`}"
     ></div>
      <div class="w-full text-left">
        <div class="p-4 font-normal text-gray-600">
        <h1 class="mb-4 text-l font-bold leading-none tracking-tight text-gray-800">{{title}}</h1>
        <p class="leading-tight">{{excerpt}}</p>
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
