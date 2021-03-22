<template>
  <Footer class="footer container">
    <img
      class="footer__banner"
      src="~/assets/images/celled-footer-banner.jpeg"
      alt="footer image"
    />
  </Footer>
</template>
<script>
export default {
  name: "TheFooter"
};
</script>
<style lang="scss">
.footer {
  border-top: 1px solid $color-gray;
  &__banner {
    max-width: 100%;
  }
}
</style>
