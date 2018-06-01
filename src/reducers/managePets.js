export let state;
// pets: [{name: 'Splash', type: 'turtle', id: 100}

//pet: {name: 'avalanche', species: 'puppy', id: 101}}
export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case "ADD_PET":
      let copy = { ...state, pets: [...state.pets] };
      copy.pets.push(action.pet);
      return copy;
    case "REMOVE_PET":
      // let copy = { ...state, pets: [...state.pets] };
      let filteredPets = state.pets.filter(pet => pet.id !== action.id);
      return { pets: filteredPets };
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {
  let outputString = "";
  state.pets.forEach((pet, index) => {
    if (index === 0) {
      // if index 0 add <ul>
      outputString += "<ul>";
    }
    outputString += `<li>${pet.name}</li>`;
    if (index === state.pets.length - 1) {
      // if last index add </ul>
      outputString += "</ul>";
    }
  });
  document.getElementById("container").innerHTML = outputString;
}
