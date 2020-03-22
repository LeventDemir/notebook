<template >
  <form @submit.prevent>
    <input ref="photoInput" class="hide-file-input" type="file" accept="image/*" />

    <div class="field">
      <div class="control">
        <textarea class="textarea" placeholder="Note" required></textarea>
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
          <select>
            <option>Unlisted</option>
            <option>Folder 1</option>
            <option>Folder 2</option>
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