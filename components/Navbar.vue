<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">
        <nuxt-link id="menuLink" :to="`/`"> On Solidity</nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <nuxt-link class="navItem" :to="`/blog/about`">
              About</nuxt-link
            ></b-nav-item
          >
          <b-nav-item
            href="https://github.com/muratcan-yuksel"
            target="”_blank”"
            >GitHub</b-nav-item
          >
          <b-nav-item
            href="https://www.linkedin.com/in/murat-can-y%C3%BCksel-2b1347119/"
            target="”_blank”"
            >LinkedIn</b-nav-item
          >
          <b-nav-item
            target="”_blank”"
            href="https://muratcan-yuksel.github.io/minimal"
            >Portfolio</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.navItem {
  color: rgba(255, 255, 255, 0.5);
}
#menuLink {
  color: whitesmoke;
}
</style>
