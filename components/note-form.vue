<template >
  <form @submit.prevent="submit">
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
      <span
        v-if="note.photo"
        @click="note.photo = null"
        class="is-size-7 has-text-danger is-clickable"
      >cancel the photo</span>
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
        <button
          type="submit"
          class="button is-link is-rounded"
        >{{ $route.name == 'create-note' ? 'Create' : 'Update' }} note</button>
      </div>
    </div>
  </form>
</template>


<script>
export default {
  mounted() {
    if (this.$route.name == "update-note-id") {
      const notes = this.$store.getters["note/getNotes"];
      const noteIndex = notes.findIndex(
        index => index["_id"] == this.$route.params.id
      );
      const note = notes[noteIndex];

      this.note.id = note._id;
      this.note.photo = note.photo;
      this.note.note = note.note;
      this.note.list = note.list;
    }
  },
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
    },
    submit() {
      if (this.$route.name == "create-note") {
        this.$store.dispatch("note/create", this.note);
      } else {
        this.$store.dispatch("note/update", this.note);
      }
    }
  }
};
</script>