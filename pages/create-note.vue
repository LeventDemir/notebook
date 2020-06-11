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
  middleware: "auth",
  components: { NoteForm }
};
</script>