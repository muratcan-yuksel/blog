<template>
  <div>
    <article>
      <div class="content">
        <nuxt-content class="posts" :document="article" />
      </div>
    </article>
    <b-button class="backBtn" variant="outline-primary">
      <nuxt-link class="links" :to="`/`"> Go back </nuxt-link>
    </b-button>
  </div>
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
.backBtn {
  margin: 2em;
}
</style>
