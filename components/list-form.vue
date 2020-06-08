<template >
  <form @submit.prevent="submit">
    <div class="field">
      <div class="control">
        <input v-model="name" class="input is-rounded" placeholder="List name" required />
      </div>
    </div>

    <br />

    <div class="field">
      <div class="control has-text-centered">
        <button
          type="submit"
          class="button is-link is-rounded"
        >{{ $route.name == 'create-list' ? 'Create' : 'Update' }} list</button>
      </div>
    </div>
  </form>
</template>


<script>
export default {
  mounted() {
    if (this.$route.name == "update-list-id") {
      const lists = this.$store.getters["list/getLists"];
      const listIndex = lists.findIndex(
        list => list._id == this.$route.params.id
      );

      if (listIndex > -1) {
        this.name = lists[listIndex].name;
      }
    }
  },
  data() {
    return {
      name: null
    };
  },
  methods: {
    submit() {
      if (this.$route.name == "create-list") {
        this.$store.dispatch("list/create", this.name);
      } else {
        const list = {
          id: this.$route.params.id,
          name: this.name
        };
        this.$store.dispatch("list/update", list);
      }
    }
  }
};
</script>