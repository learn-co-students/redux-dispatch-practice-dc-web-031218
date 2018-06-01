import React from "react";

export let state;

export function managePets(state = { pets: [] }, action) {
  switch (action.type) {
    case "ADD_PET":
      return { pets: [...state.pets, action.pet] };
    case "REMOVE_PET":
      const petToRemove = state.pets.find(pet => pet.id === action.id);
      const petIndex = state.pets.indexOf(petToRemove);
      let newArr = [...state.pets];
      newArr.splice(petIndex, 1);
      return { pets: newArr };
    default:
      return state;
  }
}

export function dispatch(action) {
  state = managePets(state, action);
  render();
}

export function render() {
  const container = document.getElementById("container");
  let petList = state.pets.map(pet => {
    return `<li>${pet.name}</li>`;
  });
  container.innerHTML = `<ul>${petList}</ul>`;
}
