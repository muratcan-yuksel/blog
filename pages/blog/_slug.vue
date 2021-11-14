<template>
  <article>
    <div class="content">
      <nuxt-content class="posts" :document="article" />
    </div>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('blog', params.slug).fetch()
    console.log(article)
    return { article }
  },
}
</script>

<style scoped>
.content {
  width: 95%;
  margin: 2em;
  padding: 0 4em 2em 4em;
}
.posts {
  font-size: 1.1rem;
}
</style>
