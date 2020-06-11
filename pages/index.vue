<template>
  <div class="column">
    <div v-if="$store.getters['user/getAuth']">
      <div class="tabs is-centered is-large">
        <ul>
          <nuxt-link
            :to="{ name: 'index', query:{ page: 'note' } }"
            :class="{ 'is-active' : $route.query.page == 'note' }"
            tag="li"
          >
            <a>Notes</a>
          </nuxt-link>
          <nuxt-link
            :to="{ name: 'index', query:{ page: 'list' } }"
            :class="{ 'is-active' : $route.query.page == 'list' }"
            tag="li"
          >
            <a>Lists</a>
          </nuxt-link>
        </ul>
      </div>

      <div
        v-for="(item, index) in $route.query.page == 'note' ? $store.getters['note/getNotes'] : $store.getters['list/getLists']"
        :key="item._id"
        class="columns"
      >
        <div v-if="!item.list || $route.query.page == 'list'" class="column is-full">
          <Note
            v-if="$route.query.page == 'note' && $store.getters['note/getNotes'].length"
            :data="item"
          />
          <List v-else :data="{ ...item, index }" />
        </div>
      </div>
    </div>
    <div v-else>
      <Notebook />
    </div>
  </div>
</template>


<script>
import Note from "@/components/note";
import List from "@/components/list";
import Notebook from "@/components/notebook";

export default {
  components: { Note, List, Notebook },
  mounted() {
    if (!this.$route.query.page) {
      this.$router.push({ name: "index", query: { page: "note" } });
    }
  }
};
</script>