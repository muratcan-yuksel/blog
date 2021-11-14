<template>
  <div id="mainContent">
    <div class="sidebar">
      <h4 class="contentItem">This blog is (mostly) on solidity language</h4>
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>

    <div class="content">
      <!-- <h1>My blog</h1> -->
      <div v-if="articles">
        <div class="article" v-for="article in articles" :key="article.id">
          <h1 class="links">
            <nuxt-link class="links" :to="`/blog/${article.slug}/`">
              {{ article.slug }}
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
import SideBar from '../components/SideBar.vue'
export default {
  name: 'Blog',
  components: {
    SideBar,
  },

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

<style scoped>
.links {
  color: black;
}
.para {
  color: #515151;
  font-size: 1rem;
}
#mainContent {
  font-family: 'PT Sans', Helvetica, Arial, sans-serif;
}
body {
  margin: 0;
  font-family: 'Lato', sans-serif;
}
.article {
  margin: 2.5em;
}
.contentItem {
  margin: 15px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #202020;
  position: fixed;
  height: 100vh;
  overflow: auto;
  color: white;
}

.sidebar a {
  display: block;
  color: white;
  padding: 16px;
  text-decoration: none;
}

.sidebar a.active {
  background-color: #202020;
  color: white;
}

.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: 20em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .sidebar a {
    float: left;
  }
  div.content {
    margin-left: 0;
  }
}

@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
</style>
