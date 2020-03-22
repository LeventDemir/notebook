<template>
  <div>
    <div class="tabs is-centered is-large">
      <ul>
        <li @click="tab= !tab" :class="{ 'is-active' : tab }">
          <a>Notes</a>
        </li>
        <li @click="tab = !tab" :class="{ 'is-active' : !tab }">
          <a>Folders</a>
        </li>
      </ul>
    </div>

    <!-- <Note /> -->
    <div v-for="i in 3" :key="i" class="columns">
      <div class="column is-full">
        <Folder />
      </div>
    </div>
  </div>
</template>


<script>
import Note from "@/components/note";
import Folder from "@/components/folder";

export default {
  components: { Note, Folder },
  data() {
    return {
      tab: true
    };
  }
};
</script>