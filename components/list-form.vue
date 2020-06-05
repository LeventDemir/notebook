<template >
  <form @submit.prevent>
    <div class="field">
      <div class="control">
        <input class="input is-rounded" placeholder="List name" required />
      </div>
    </div>

    <br />

    <div class="field">
      <div class="control has-text-centered">
        <button type="submit" class="button is-link is-rounded">Create list</button>
      </div>
    </div>
  </form>
</template>