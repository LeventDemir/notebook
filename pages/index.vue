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

    <div v-for="item in tab ? $store.getters['note/getNotes'] : []" :key="item._id" class="columns">
      <div class="column is-full">
        <Note :data="item" v-if="tab" />
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
      tab: true,
      list: null
    };
  }
};
</script>