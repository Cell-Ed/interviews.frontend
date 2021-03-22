<template>
  <header class="the-header container">
    <h2 class="the-header__heading">Pets Inventory</h2>
    <h3 class="the-header__subhead">
      An Interview Project by Tru Nguyen
    </h3>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss">
.the-header {
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
  text-align: center;

  @include media-breakpoint-up(md) {
    background: url(~/assets/images/celled-header-banner.jpeg) no-repeat right
      center;
    background-size: contain;
    text-align: left;
  }

  &__heading {
    font-weight: 700;
    text-transform: uppercase;
  }

  &__subhead {
    font-size: 12px;
  }
}
</style>
