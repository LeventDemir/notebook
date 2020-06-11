<template>
  <div class="box">
    <div class="field">
      <div class="control">
        <textarea v-model="note" class="textarea is-primary" rows="15" placeholder="Take note"></textarea>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    this.note = localStorage.getItem("note");
  },
  data() {
    return {
      note: null
    };
  },
  watch: {
    note() {
      localStorage.setItem("note", this.note);
    }
  }
};
</script>