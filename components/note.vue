<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div v-if="data.photo" class="media-left">
          <div class="image is-128x128">
            <img
              style="width: 128px; height:128px;object-fit: scale-down"
              :src="data.photo"
              alt="Image"
            />
          </div>
        </div>

        <div class="media-content">
          <p
            class="content is-description"
            :class="collapsible ? 'text-collapsible-active' : 'text-collapsible'"
          >{{ data.note }}</p>
        </div>
      </div>

      <time class="is-size-7 has-text-grey">{{ data.createdAt }}</time>

      <div class="is-pulled-right">
        <span @click="collapsible = !collapsible" class="icon has-text-grey-light">
          <i class="fas" :class="collapsible ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
        </span>
        <nuxt-link
          :to="{ name: 'update-note-id', params: { id: data._id } }"
          class="icon has-text-success"
          tag="span"
        >
          <i class="fas fa-pen"></i>
        </nuxt-link>
        <span @click="$store.dispatch('note/delete', data._id)" class="icon has-text-danger">
          <i class="fas fa-trash"></i>
        </span>
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