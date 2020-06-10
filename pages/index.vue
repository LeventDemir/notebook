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

    <div
      v-for="(item, index) in tab ? $store.getters['note/getNotes'] : $store.getters['list/getLists']"
      :key="item._id"
      class="columns"
    >
      <div v-if="!item.list || !tab" class="column is-full">
        <Note v-if="tab" :data="item" />
        <List v-else :data="{ ...item, index }" />
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