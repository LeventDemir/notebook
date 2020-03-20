<template>
  <div>
    <div class="tabs is-centered is-large">
      <ul>
        <li class="is-active">
          <a>Notes</a>
        </li>
        <li>
          <a>Folders</a>
        </li>
      </ul>
    </div>

    <Note />
  </div>
</template>


<script>
import Note from "@/components/note";

export default {
  components: { Note }
};
</script>