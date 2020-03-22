<template >
  <div class="card">
    <div class="card-content">
      <div @click="collapsible = !collapsible" class="is-clickable">
        <span class="is-size-5">This is a title</span>

        <div class="is-pulled-right">
          <span class="icon has-text-success">
            <i class="fas fa-pen"></i>
          </span>
          <span class="icon has-text-danger">
            <i class="fas fa-trash"></i>
          </span>
        </div>
      </div>

      <div :class="collapsible ? 'collapsible-active' : 'collapsible'">
        <hr />

        <div v-for="i in 2" :key="i"  class="columns">
          <div class="column is-full">
            <Note />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Note from "@/components/note";

export default {
  components: { Note },
  data() {
    return {
      collapsible: false
    };
  }
};
</script>