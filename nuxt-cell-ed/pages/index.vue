<template>
  <div class="home container">
    <div class="home__content">
      <b-row>
        <b-col md="6">
          <h1 class="home__headline">Hi CELL-ED!</h1>
          <p>
            My name is Tru and welcome to my pet inventory project! Over the
            past week, I spent my limited extra time in between family and a
            full-time job to showcase my skills. I recognize that with the short
            time constraints, there are still so much potential and
            opportunities that are currently less than ideal. Some of the areas
            I would have loved to invest in, not conclusively, would be
            accessibility, scalable components library, refactoring current
            components, and organizing vuex structure. Thank you for your time
            and consideration and I hope you enjoy my project!
          </p>
        </b-col>
        <b-col md="6">
          <img class="home__hero" src="~/assets/images/hero.jpg" alt="" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Pet Inventory | Home"
    };
  }
};
</script>

<style lang="scss">
.home {
  &__headline {
    font-size: 24px;
    font-weight: 600;
    color: $color-green;
  }
  &__content {
    padding: 20px 0;
    @include media-breakpoint-up(md) {
      padding: 40px 0;
    }
  }
  &__hero {
    max-width: 100%;
    display: block;
  }
}
</style>
