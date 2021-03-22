<template>
  <div class="navigation container">
    <ul class="navigation__list">
      <li class="navigation__list-item">
        <NuxtLink class="navigation__link" to="/">Home</NuxtLink>
      </li>
      <li class="navigation__list-item">
        <NuxtLink class="navigation__link" to="/pets-inventory"
          >Pets Inventory</NuxtLink
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.navigation {
  background: $color-gray-dark;

  &__list {
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;
  }

  &__list-item {
    list-style-type: none;
  }

  &__link {
    color: $color-white;
    font-weight: 600;
    padding: 10px 20px;
    display: inline-block;
    transition: all 0.2s ease;

    &.nuxt-link-exact-active,
    &:hover {
      text-decoration: none;
      color: $color-green;
    }
  }
}
</style>
