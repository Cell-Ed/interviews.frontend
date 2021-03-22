<template>
  <b-list-group-item class="pet-item">
    <b-row align-v="center">
      <b-col md="6" lg="8" class="pet-item__content">
        <h3 class="pet-item__heading">{{ pet.petName }}</h3>
        <small v-if="pet.archived">(Archived)</small>
        <p>Owner: {{ pet.ownerName }}</p>
        <p>Type: {{ pet.petType }}</p>
      </b-col>
      <b-col md="6" lg="4" class="pet-item__button-group">
        <b-button @click="handleDelete()" variant="danger">Delete pet</b-button>
        <b-button @click="handleArchive()" variant="warning"
          >Archive pet</b-button
        >
      </b-col>
    </b-row>
  </b-list-group-item>
</template>
<script>
import { mapActions } from "vuex";

const petPropKeys = ["petName", "ownerName", "petType", "id", "archived"];

export default {
  name: "PetItem",
  props: {
    pet: {
      type: Object,
      required: true,
      validator: pet => petPropKeys.every(key => key in pet)
    }
  },
  methods: {
    ...mapActions({ deletePet: "deletePet", archivePet: "archivePet" }),

    handleDelete() {
      this.deletePet(this.pet.id);
    },

    handleArchive() {
      this.archivePet(this.pet.id);
    }
  }
};
</script>
<style lang="scss">
.pet-item {
  &__heading {
    font-size: 24px;
    font-weight: 600;
    color: $color-green;
  }

  p {
    margin: 10px 0 0;
  }
}
</style>
