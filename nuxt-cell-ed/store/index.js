export const state = () => ({
  pets: []
});

export const mutations = {
  ADD_PET(state, pet) {
    state.pets.push({ ...pet });
  },
  DELETE_PET(state, id) {
    state.pets = state.pets.filter(pet => pet.id !== id);
  },
  ARCHIVE_PET(state, id) {
    state.pets = state.pets.map(pet => {
      if (pet.id === id) {
        pet.archived = true;
      }
      return pet;
    }, []);
  },
  ADD_PETS(state, pets) {
    state.pets = pets;
  }
};

export const actions = {
  addPet({ commit }, pet) {
    commit("ADD_PET", pet);
  },
  deletePet({ commit }, id) {
    commit("DELETE_PET", id);
  },
  archivePet({ commit }, id) {
    commit("ARCHIVE_PET", id);
  },
  addPets({ commit }, pets) {
    commit("ADD_PETS", pets);
  }
};
