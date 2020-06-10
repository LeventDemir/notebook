<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

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
            @click.native="close"
            :to="{ name: 'index', query: { page: 'note' } }"
            class="navbar-item"
            tag="a"
          >Home</nuxt-link>
          <nuxt-link
            @click.native="close"
            :to="{ name: 'create-note' }"
            class="navbar-item"
            tag="a"
          >Create note</nuxt-link>
          <nuxt-link
            @click.native="close"
            :to="{ name: 'create-list' }"
            class="navbar-item"
            tag="a"
          >Create list</nuxt-link>
          <a @click="logout" class="navbar-item">Logout</a>
        </div>
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