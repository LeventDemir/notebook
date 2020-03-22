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

    <div v-for="i in 3" :key="i" class="columns">
      <div class="column is-full">
        <Note v-if="tab" />
        <Folder v-else />
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
      tab: true,
      notes: [1, 2, 3, 4],
      folder: [1, 2, 3, 4]
    };
  }
};
</script>