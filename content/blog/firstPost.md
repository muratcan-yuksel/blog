---
title: First post
description: orem ipsum dolor sit lol, consectetur adipisicing elit. Nobis aperiam suscipit laborum praesentium vitae, quidem officiis soluta amet recusandae iure sint quis perspiciatis? Voluptate sapiente corporis repellendus eum sunt cupiditate!
---

## this is a post mate

<p>Lorem ipsum dolor sit lol, consectetur adipisicing elit. Nobis aperiam suscipit laborum praesentium vitae, quidem officiis soluta amet recusandae iure sint quis perspiciatis? Voluptate sapiente corporis repellendus eum sunt cupiditate! </p>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis aperiam suscipit laborum praesentium vitae, quidem officiis soluta amet recusandae iure sint quis perspiciatis? Voluptate sapiente corporis repellendus eum sunt cupiditate!

````
    <div class="content">
      <h1>My blog</h1>
      <div v-if="articles">
        <div v-for="article in articles" :key="article.id">
          {{ article.slug }}
          {{ article.createdAt | formatDate }}
          {{ article.description }}
          <nuxt-link :to="`/blog/${article.slug}/`"> Continue reading </nuxt-link>
        </div>
      </div>
      <div v-else>
        <h1>Loading...</h1>
      </div>
      ```
````
