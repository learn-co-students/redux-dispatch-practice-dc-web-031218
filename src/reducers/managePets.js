export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type) {
    case 'ADD_PET':
      let arr = [...state.pets, action.pet]
      return {pets: arr}
    case 'REMOVE_PET':
      let removePet = state.pets.find(pet => pet.id === action.id)
      console.log(removePet)
      let index = state.pets.indexOf(removePet)
      console.log('index', index)
      let arr2 = [...state.pets]
      console.log(arr2)
      arr2.splice(index,1)
      return {pets: arr2}
    default:
      return state
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  let pets = state.pets.map(pet => {
    return `<li>${pet.name}</li>`
  });
  document.getElementById('container').innerHTML = `<ul>${pets}</ul>`
}
