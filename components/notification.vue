<template>
  <div id="notification" class="column is-hidden">
    <div class="notification is-light">
      <button class="delete"></button>
      <span>
        Primar lorem ipsum dolor sit amet, consectetur
        adipiscing elit lorem ipsum dolor.
      </span>
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    const notification = document.getElementById("notification");
    const deleteButton = document.querySelectorAll(".notification .delete")[0];

    deleteButton.addEventListener("click", () => {
      notification.parentNode.removeChild(notification);
    });
  }
};
</script>