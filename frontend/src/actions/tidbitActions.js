import uuid from 'uuid';
import {Button} from 'reactstrap';

export function addTidbit (bit) {
  return {
    type: 'ADD_TIDBIT',
    tidbit: {
      id: uuid(),
      bit: bit,
      opinion: " I think it's..." 
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

