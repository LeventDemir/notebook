<template>
  <div>
    <Navbar />

    <br />
    <br />

    <main class="container">
      <nuxt />
    </main>

    <br />
    <br />
    <br />
    <br />

    <Footer />
  </div>
</template>


<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default {
  components: { Navbar, Footer }
};
</script>