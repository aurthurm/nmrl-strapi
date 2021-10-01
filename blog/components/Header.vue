<template>
    <!-- Main Site Header -->
    <header id="site-header" class="container mx-auto flex justify-between bg-white">
      <span class="flex justify-start">
        <a v-if="!logoLoading" class="" href="">
          <img :src="api_url + logo.image.url" alt="" class="col-span-1 object-contain h-10 ml-10" />
        </a>
      </span>
      <nav class="col-span-2 flex justify-center">
        <a v-for="(nav, index) in mainNavs" :key="index"
        class="py-2 px-3 hover:bg-gray-200 uppercase" href="" v-html="nav.title"></a>
      </nav>
    </header>
    <!-- / Main Site Header -->
</template>

<style>

</style>


<script lang="ts">
  import Vue from 'vue'
  import { mapGetters, mapActions } from 'vuex';

  export default Vue.extend({
    data() {
      return {
        logoLoading: true,
        logo: {},
        error: null,
       }
    },
    computed: { 
        ...mapGetters({
          api_url: 'getStrapiAPI',
          mainNavs: 'getMainNavigation',
        })
    },
    async fetch() {
      await this.$axios.get('logo')
      .then((res: any) => {
        this.logo = res.data
        this.logoLoading = false
      })
      .catch((err: any) => {
        this.error = err
      })
      console.log("done fetching")
    }

  })
</script>