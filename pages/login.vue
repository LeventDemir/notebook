<template >
  <div class="columns">
    <div class="column is-full">
      <br />
      <br />

      <form @submit.prevent="$store.dispatch('user/login', user)">
        <div class="field">
          <p class="control has-icons-left">
            <input
              v-model="user.username"
              class="input is-rounded"
              type="text"
              placeholder="Username"
              required
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>

        <div class="field">
          <p class="control has-icons-left">
            <input
              v-model="user.password"
              class="input is-rounded"
              type="password"
              placeholder="Password"
              required
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>

        <br />

        <div class="field">
          <div class="control has-text-centered">
            <button type="submit" class="button is-link is-rounded">Login</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: {
        username: null,
        password: null
      }
    };
  }
};
</script>