<template>
  <div>
    <div class="tabs is-centered is-large">
      <ul>
        <li @click="tab= !tab" :class="{ 'is-active' : tab }">
          <a>Notes</a>
        </li>
        <li @click="tab = !tab" :class="{ 'is-active' : !tab }">
          <a>Lists</a>
        </li>
      </ul>
    </div>

    <div v-for="i in 3" :key="i" class="columns">
      <div class="column is-full">
        <Note v-if="tab" />
        <List v-else />
      </div>
    </div>
  </div>
</template>


<script>
import Note from "@/components/note";
import List from "@/components/list";

export default {
  components: { Note, List },
  data() {
    return {
      tab: true
    };
  }
};
</script>