<template>
  <div id="mainSlug">
    <Navbar />
    <!-- content -->
    <article>
      <div class="content">
        <nuxt-content class="posts" :document="article" />
      </div>
    </article>
    <!-- back button -->
    <b-button class="backBtn" variant="outline-primary">
      <nuxt-link class="links" :to="`/`"> Go back </nuxt-link>
    </b-button>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue'
export default {
  components: {
    Navbar,
  },
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    console.log(article)
    return { article }
  },
}
</script>

<style scoped>
#mainslug {
  background-color: whitesmoke;
}
.content {
  width: 95%;
  margin: 2em;
}
.posts {
  /* font-size: 1.3rem; */
}
.backBtn {
  margin: 2em;
  /* padding: 0 4em 2em 4em; */
}
</style>
