<template>
  <div>
    <Navbar />

    <br />

    <main class="container">
      <Notification />

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
import Notification from "@/components/notification";
import Footer from "@/components/footer";

export default {
  components: { Navbar, Notification, Footer }
};
</script>