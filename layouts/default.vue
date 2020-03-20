<template>
  <div>
    <Navbar />

    <br />
    <br />

    <div class="container">
      <nuxt />
    </div>
  </div>
</template>


<script>
import Navbar from "@/components/navbar";

export default {
  components: { Navbar }
};
</script>