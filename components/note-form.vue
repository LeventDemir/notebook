<template >
  <form @submit.prevent="$store.dispatch('note/create', note)">
    <input
      @change="handleFileUpload"
      ref="photoInput"
      class="hide-file-input"
      type="file"
      accept="image/*"
    />

    <div class="field">
      <div class="control">
        <textarea v-model="note.note" class="textarea" placeholder="Note" required />
      </div>
    </div>

    <div class="field">
      <div class="control">
        <button
          @click="$refs.photoInput.click()"
          class="button is-success is-outlined is-rounded is-fullwidth bold-border"
          type="button"
        >
          <span class="icon is-small">
            <i class="fas fa-camera"></i>
          </span>
          <span>Photo</span>
        </button>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <div class="select is-rounded is-fullwidth">
          <select v-model="note.list">
            <option :value="null">Unlisted</option>
            <option value="1">List 1</option>
            <option value="2">List 2</option>
          </select>
        </div>
      </div>
    </div>

    <br />

    <div class="field">
      <div class="control has-text-centered">
        <button type="submit" class="button is-link is-rounded">Create note</button>
      </div>
    </div>
  </form>
</template>


<script>
export default {
  data() {
    return {
      note: {
        photo: null,
        note: null,
        list: null
      }
    };
  },
  methods: {
    handleFileUpload(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;

      const reader = new FileReader();

      if (files[0].size / (1024 * 1024) < 1) {
        const vm = this;

        reader.onload = e => (vm.note.photo = e.target.result);
        reader.readAsDataURL(files[0]);
        this.note.photo = "";
      } else {
        this.$notification({
          msg: "The photo you will upload must be less than 6 MB!",
          class: "is-danger"
        });
      }
    }
  }
};
</script>