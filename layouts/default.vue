<template>
  <div>
    <Navbar />

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