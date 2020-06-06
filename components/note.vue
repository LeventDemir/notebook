<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div v-if="data.photo" class="media-left">
          <div class="image is-128x128">
            <img :src="data.photo" alt="Image" />
          </div>
        </div>

        <div class="media-content">
          <div
            class="content"
            :class="collapsible ? 'text-collapsible-active' : 'text-collapsible'"
          >
            <p>{{ data.note }}</p>
          </div>

          <time class="is-size-7 has-text-grey">{{ data.createdAt }}</time>

          <div class="is-pulled-right">
            <span @click="collapsible = !collapsible" class="icon has-text-grey-light is-clickable">
              <i class="fas" :class="collapsible ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
            </span>
            <span class="icon has-text-success">
              <i class="fas fa-pen"></i>
            </span>
            <span @click="$store.dispatch('note/delete', data._id)" class="icon has-text-danger">
              <i class="fas fa-trash"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      collapsible: false
    };
  }
};
</script>