<template>
  <b-form class="form-add-pet" @submit.prevent>
    <b-form-group label="Pet Name:" label-for="pet-name">
      <b-form-input id="pet-name" v-model="petName" :required="true" />
    </b-form-group>
    <b-form-group label="Owner Name:" label-for="owner-name">
      <b-form-input id="owner-name" v-model="ownerName" :required="true" />
    </b-form-group>
    <b-form-group label="Pet Type:" label-for="pet-type">
      <b-form-select
        id="pet-type"
        v-model="petType"
        :options="petTypeOptions"
        :required="true"
      />
    </b-form-group>
    <b-button :disabled="submitDisabled" variant="primary" @click="handleSumbit"
      >Add Pet</b-button
    >
  </b-form>
</template>
<script>
import { mapActions } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      petName: "",
      ownerName: "",
      petType: "",
      petTypeOptions: [
        { value: "", text: "" },
        { value: "Bird", text: "Bird" },
        { value: "Dog", text: "Dog" },
        { value: "Cat", text: "Cat" },
        { value: "Fish", text: "Fish" }
      ]
    };
  },

  computed: {
    submitDisabled() {
      return !this.petName || !this.ownerName || !this.petType;
    }
  },

  methods: {
    ...mapActions({
      addPet: "addPet"
    }),
    clearForm() {
      this.petName = "";
      this.ownerName = "";
      this.petType = "";
    },
    handleSumbit() {
      this.addPet({
        petName: this.petName,
        ownerName: this.ownerName,
        petType: this.petType,
        id: uuidv4(),
        archived: false
      });
      this.clearForm();
    }
  }
};
</script>
<style lang="scss">
.form-add-pet {
  border-bottom: 1px solid $color-gray;
  padding-bottom: 20px;
}
</style>
