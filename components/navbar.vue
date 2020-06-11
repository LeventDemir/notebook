<template>
  <nav class="container navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link :to="{ name: 'index', query: { page: 'note' } }" class="navbar-item" tag="a">
        <span class="is-size-3 has-text-info">Notebook</span>
      </router-link>

      <a
        id="navbar-burger"
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="mobileNavbar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="mobileNavbar" class="navbar-menu">
      <div class="navbar-end">
        <nuxt-link
          v-if="$store.getters['user/getAuth']"
          @click.native="close"
          :to="{ name: 'index', query: { page: 'note' } }"
          class="navbar-item"
          tag="a"
        >Home</nuxt-link>
        <nuxt-link
          v-if="$store.getters['user/getAuth']"
          @click.native="close"
          :to="{ name: 'create-note' }"
          class="navbar-item"
          tag="a"
        >Create note</nuxt-link>
        <nuxt-link
          v-if="$store.getters['user/getAuth']"
          @click.native="close"
          :to="{ name: 'create-list' }"
          class="navbar-item"
          tag="a"
        >Create list</nuxt-link>
        <a v-if="$store.getters['user/getAuth']" @click="logout" class="navbar-item">Logout</a>
        <nuxt-link
          v-if="!$store.getters['user/getAuth']"
          @click.native="close"
          :to="{ name: 'login' }"
          class="navbar-item"
          tag="a"
        >Login</nuxt-link>
        <nuxt-link
          v-if="!$store.getters['user/getAuth']"
          @click.native="close"
          :to="{ name: 'register' }"
          class="navbar-item"
          tag="a"
        >Register</nuxt-link>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  mounted() {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  },
  methods: {
    close() {
      const mobileNavbar = document.getElementById("mobileNavbar");
      const navbarBurger = document.getElementById("navbar-burger");

      mobileNavbar.classList.toggle("is-active");
      navbarBurger.classList.toggle("is-active");
    },
    logout() {
      this.$store.dispatch("user/logout");
      this.close();
    }
  }
};
</script>