<template>
  <div id="mainContent">
    <Navbar />
    <div class="content">
      <div v-if="articles">
        <div class="article" v-for="article in articles" :key="article.id">
          <h1 class="links">
            <nuxt-link class="links" :to="`/blog/${article.slug}/`">
              {{ article.title }}
            </nuxt-link>
          </h1>
          <p>{{ article.createdAt | formatDate }}</p>
          <p class="para">
            {{ article.description }}
            <nuxt-link class="links" :to="`/blog/${article.slug}/`">
              ...
            </nuxt-link>
          </p>
        </div>
      </div>
      <div v-else>
        <h1>Loading...</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'
import Navbar from '../components/Navbar.vue'
export default {
  name: 'Blog',
  components: {
    Navbar,
  },

  filters: {
    formatDate() {
      return format(new Date(), 'dd MMM yyyy')
    },
  },
  async asyncData(context) {
    const { $content } = context
    let articles0 = await $content('blog').fetch()
    let articles = articles0.reverse()
    console.log(articles)
    return { articles }
  },
}
</script>

<style scoped>
.links {
  color: black;
}
.content {
  margin: 2em;
}
#mainContent {
  background-color: whitesmoke;
}
</style>
