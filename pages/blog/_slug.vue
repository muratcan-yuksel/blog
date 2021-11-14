<template>
  <article>
    <div class="content">
      <nuxt-content :document="article" />
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
  width: 100%;
}
</style>
