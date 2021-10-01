<template>
  <!-- Site Main Content -->
  <main class="text-center container mx-auto">

    <!-- Blog Snapshot -->
    <section class="mt-12">
      <h4 class="text-gray-600 text-sm font-semibold text-left uppercase">In our Articles</h4>
      <hr class="mb-2 mt-0">
      <div class="flex justify-between">

        <ArticleCardLeft
          v-for="article in homeData.random_selected"
          :key="article.id"
          :title="article.title"
          :excerpt="article.description.slice(0, 100)"
          :imageUrl="api_url + article.featured_image.url"
        />

        <div class="mx-2 flex items-center">
          <div class="mx-auto my-auto">
            <div class="w-48 h-0 bg-top bg-cover rounded-t"
              style="background-image: url(https://www.si.com/.image/t_share/MTY4MTkyMjczODM4OTc0ODQ5/cfp-trophy-deitschjpg.jpg)">
            </div>
            <div class="text-left">
              <div class="p-4 font-normal text-gray-600">
                <h1 class="mb-4 text-l font-bold leading-none tracking-tight text-gray-800">FOR MORE ARTICLES
                </h1>
                <button class="mx-auto py-2 px-4 bg-black rounded-l text-white font-semibold w-full">Lets Go
                  ...</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- / Top Stories -->

    <!-- Featired / Top Articles -->
    <section class="mt-12">
      <h4 class="text-gray-600 text-sm font-semibold text-left uppercase">Featured Stories</h4>
      <hr class="mb-2 mt-0">

      <div class="grid grid-cols-5 gap-4">
        <!-- Huge Featirette Article -->
        <article class="col-span-3 flex items-center h-auto bg-cover rounded-l-lg"
          :style="{ backgroundImage: `url(${api_url + homeData.mainFeatured.featured_image.url})` }"
          >
          <div class="w-full h-full flex items-center bg-gray-900 bg-opacity-50 p-5 rounded-lg rounded-l-none">
            <div class="px-8 mb-4 text-center">
              <h3 class="pt-4 mb-2 text-4xl font-bold text-white ">{{homeData.mainFeatured.title}}</h3>
              <p class="mt-4 text-lg text-gray-200">{{homeData.mainFeatured.description}}</p>
            </div>
          </div>
        </article>
        <!-- / Huge Featirette Article -->
        <!-- Article roll -->
        <div class="col-span-2">
          <ArticleCardLeft
            v-for="article in homeData.featured_articles"
            :key="article.id"
            :title="article.title"
            :excerpt="article.description.slice(0, 100)"
            :imageUrl="api_url + article.featured_image.url"
          />
        </div>
        <!-- / Article roll -->
      </div>
    </section>
    <!-- Featired / Top Articles -->

    <!-- Departments -->
    <section >

    </section>
    <!-- / Departments -->
  </main>
  <!-- / Site Main Content -->
</template>


<script lang="js">
  import Vue from 'vue'
  import { mapGetters, mapActions } from 'vuex';

  export default Vue.extend({
    // data() {
    //   return {
    //     homeDataLoading: true,
    //    }
    // },
    async asyncData({ $axios }) {
      const hp_res = await $axios.get('home-page')
      .then(res => res)
      .catch(err => err)
      return { homeData: hp_res.data }
    },
    computed: {
      ...mapGetters({
          api_url: 'getStrapiAPI',
      })
    },
    methods: {
      truncate(str, numberOfWords) {
          return str.replace(/(<([^>]+)>)/ig,"").split(/\s+/).slice(0, numberOfWords).join(" ") + " ..."
      },
    }
  })
    // async mounted() {
    //   this.homeDataLoading = true
    //   await this.$store.dispatch('setHomePage').then(res => {
    //     this.homeDataLoading = false
    //   })
    // },
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>

