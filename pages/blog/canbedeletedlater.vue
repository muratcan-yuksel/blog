<template>
  <div>
    <h1>My blog</h1>
    <div v-for="article in articles" :key="article.id">
      {{ article.slug }}
      {{ article.createdAt | formatDate }}
      {{ article.description }}
      <nuxt-link :to="`/blog/${article.slug}/`"> Learn more </nuxt-link>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'
export default {
  name: 'Blog',
  filters: {
    formatDate() {
      return format(new Date(), 'dd MMM yyyy')
    },
  },
  async asyncData(context) {
    const { $content } = context
    const articles = await $content('blog').fetch()
    console.log(articles)
    return { articles }
  },
}
</script>
