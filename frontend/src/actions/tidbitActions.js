import uuid from 'uuid';

export function addTidbit (bit) {
  return {
    type: 'ADD_TIDBIT',
    tidbit: {
      id: uuid(),
      bit: bit,
      opinion: false
    }
  }
}

export function toggleTidbit (id) {
  return {
    type: 'TOGGLE_TIDBIT',
    id
  }
}

export function deleteTidbit (id) {
  return {
    type: 'DELETE_TIDBIT',
    id
  }
}

