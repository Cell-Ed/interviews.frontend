<template>
  <div class="pets-inventory container">
    <div>
      <h1 class="pets-inventory__headline">
        Pets Inventory
      </h1>

      <h3>Add a pet</h3>
      <FormAddPet />

      <div class="pets-inventory__bar">
        <h2 class="pets-inventory__subhead">Pets list</h2>

        <label for="pets-inventory__filter">Filter by: </label>
        <b-form-select
          id="pets-inventory__filter"
          class="pets-inventory__filter"
          v-model="filterType"
          :options="filterOptions"
        />

        <label for="pets-inventory__sort">Sort by: </label>
        <b-form-select
          id="pets-inventory__sort"
          class="pets-inventory__sort"
          v-model="sortType"
          :options="sortOptions"
        />

        <b-button
          class="pets-inventory__archive-button"
          @click="toggleArchived()"
          variant="secondary"
          >{{ displayArchiveLabel }}</b-button
        >
      </div>

      <b-list-group v-if="petsInventory.length" class="pets-inventory__list">
        <transition-group name="list">
          <PetItem v-for="pet in petsInventory" :key="pet.id" :pet="pet" />
        </transition-group>
      </b-list-group>
      <div v-else>
        <p>
          Currently, there are no pets.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "PetsInventory",
  data() {
    return {
      localStoragePets: [],
      filterType: "",
      sortType: "",
      displayArchive: false,
      filterOptions: [
        { value: "", text: "" },
        { value: "Bird", text: "Bird" },
        { value: "Dog", text: "Dog" },
        { value: "Cat", text: "Cat" },
        { value: "Fish", text: "Fish" }
      ],
      sortOptions: [
        { value: "", text: "" },
        { value: "petNameAZ", text: "Pet name A-Z" },
        { value: "ownerNameAZ", text: "Owner name A-Z" }
      ]
    };
  },
  head() {
    return {
      title: "Pet Inventory | Inventory page"
    };
  },
  computed: {
    ...mapState({
      pets: state => state.pets
    }),
    petsInventory() {
      let inventory = [...this.pets];

      // filter out archived
      if (!this.displayArchive) {
        inventory = this.pets.filter(pets => pets.archived === false);
      }

      // filter by
      if (this.filterType !== "") {
        inventory = inventory.filter(pet => {
          return pet.petType === this.filterType;
        });
      }

      // sort by
      if (this.sortType !== "") {
        const sortKey = this.sortType === "petNameAZ" ? "petName" : "ownerName";
        inventory = inventory.sort((a, b) => {
          let petA = a[sortKey].toLowerCase(),
            petB = b[sortKey].toLowerCase();

          if (petA < petB) {
            return -1;
          }
          if (petA > petB) {
            return 1;
          }
          return 0;
        });
      }

      return inventory;
    },
    displayArchiveLabel() {
      return this.displayArchive ? "Hide archived" : "Show archived";
    }
  },
  watch: {
    pets(pets) {
      localStorage.setItem("pets", JSON.stringify(pets));
    }
  },
  methods: {
    ...mapActions({
      addPets: "addPets"
    }),
    toggleArchived() {
      this.displayArchive = !this.displayArchive;
    }
  },
  mounted() {
    // update store with pets
    const pets = JSON.parse(localStorage.getItem("pets")) || [];
    this.addPets(pets);
  }
};
</script>

<style lang="scss">
.pets-inventory {
  padding: 20px 0;

  &__bar {
    margin: 20px 0;

    @include media-breakpoint-up(md) {
      display: flex;
      margin: 40px 0 20px;
      align-items: center;
    }
  }

  &__filter.custom-select {
    margin: 10px 0 0;
    @include media-breakpoint-up(md) {
      margin: 0 10px;
      width: 120px;
    }
  }
  &__sort.custom-select {
    margin: 10px 0 0;
    @include media-breakpoint-up(md) {
      margin: 0 10px;
      width: 200px;
    }
  }

  &__archive-button {
    margin-top: 20px;
    @include media-breakpoint-up(md) {
      margin-top: 0;
    }
  }

  &__subhead {
    flex-grow: 1;
  }

  &__list {
    position: relative;
  }

  .list-enter-active,
  .list-leave-active,
  .list-move {
    transition: 0.5s cubic-bezier(0.59, 0.12, 0.34, 0.95);
    transition-property: opacity, transform;
    transition-delay: 0.2s;
  }

  .list-enter {
    opacity: 0;
    transform: translateX(10px) scaleY(0.5);
  }

  .list-enter-to {
    opacity: 1;
    transform: translateX(0) scaleY(1);
  }

  .list-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
