<template >
  <div class="columns">
    <div class="column is-full">
      <br />
      <br />

      <form @submit.prevent>
        <div class="field">
          <p class="control has-icons-left">
            <input class="input is-rounded" type="text" placeholder="Username" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>

        <div class="field">
          <p class="control has-icons-left">
            <input class="input is-rounded" type="password" placeholder="Password" />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>

        <br />

        <div class="field">
          <div class="control has-text-centered">
            <button type="submit" class="button is-link is-rounded">Register</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>