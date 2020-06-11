<template>
  <div class="column">
    <div v-if="$store.getters['user/getAuth']">
      <div class="tabs is-centered is-large">
        <ul>
          <nuxt-link
            :to="{ name: 'index', query:{ page: 'note' } }"
            :class="{ 'is-active' : page == 'note' }"
            tag="li"
          >
            <a>Notes</a>
          </nuxt-link>
          <nuxt-link
            :to="{ name: 'index', query:{ page: 'list' } }"
            :class="{ 'is-active' : page == 'list' }"
            tag="li"
          >
            <a>Lists</a>
          </nuxt-link>
        </ul>
      </div>

      <div
        v-for="(item, index) in page == 'note' ? $store.getters['note/getNotes'] : $store.getters['list/getLists']"
        :key="item._id"
        class="columns"
      >
        <div class="column is-full">
          <Note v-if="page == 'note'" :data="item" />
          <List v-else :data="{ ...item, index }" />
        </div>
      </div>

      <div
        v-if="!$store.getters['note/getNotes'].length && page == 'note'"
        class="has-text-centered"
      >
        <br />
        <nuxt-link
          :to="{ name: 'create-note' }"
          tag="button"
          class="button is-link is-rounded is-outlined is-fullwidth"
        >Create a note</nuxt-link>
      </div>

      <div
        v-if="!$store.getters['list/getLists'].length && page == 'list'"
        class="has-text-centered"
      >
        <br />
        <nuxt-link
          :to="{ name: 'create-list' }"
          tag="button"
          class="button is-link is-rounded is-outlined is-fullwidth"
        >Create a list</nuxt-link>
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
    if (!this.page) {
      this.$router.push({ name: "index", query: { page: "note" } });
    }
  },
  computed: {
    page() {
      return this.$route.query.page;
    }
  }
};
</script>