<template>
  <div class="columns">
    <div class="column is-full">
      <br />
      <br />

      <ListForm />
    </div>
  </div>
</template>


<script>
import ListForm from "@/components/list-form";

export default {
  validate({ params }) {
    return params.id;
  },
  components: { ListForm }
};
</script>