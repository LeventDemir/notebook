<template>
  <div class="columns">
    <div class="column is-full">
      <NoteForm />
    </div>
  </div>
</template>


<script>
import NoteForm from "@/components/note-form";

export default {
  validate({ params }) {
    return params.id;
  },
  components: { NoteForm }
};
</script>