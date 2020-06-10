<template >
  <div class="card">
    <div class="card-content">
      <span class="is-size-5">{{ data.name }}</span>

      <div class="is-pulled-right">
        <span @click="collapsible = !collapsible" class="icon has-text-grey-light">
          <i class="fas" :class="collapsible ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
        </span>
        <nuxt-link
          :to="{ name: 'update-list-id', params: { id: data._id } }"
          class="icon has-text-success"
          tag="span"
        >
          <i class="fas fa-pen"></i>
        </nuxt-link>
        <span @click="$store.dispatch('list/delete', data._id)" class="icon has-text-danger">
          <i class="fas fa-trash"></i>
        </span>
      </div>

      <div :class="collapsible ? 'collapsible-active' : 'collapsible'">
        <hr />

        <div
          v-for="(note, index) in $store.getters['list/getLists'][data.index].notes"
          :key="index"
          class="columns"
        >
          <div class="column is-full">
            <Note :data="note" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Note from "@/components/note";

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: { Note },
  data() {
    return {
      collapsible: false
    };
  }
};
</script>