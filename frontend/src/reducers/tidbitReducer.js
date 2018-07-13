const defaultState = [
  {
    id: 0,
    bit: "Has anyone seen the man who used to give free advice on Sundays seated on the grass facing the Painted ladies? It's been a while since I last spotted him and he added a nice touch to the park. ",
    opinion: false
  },
  {
    id: 1,
    bit: "I love this park! I live across the street and try to go every other evening. I f you're visiting, get a coffee at The Mill about a bock away on Divis",
    opinion: false
  },
  {
    id: 2,
    bit: "The shoe garden is a little ratty-looking these days :( ... ",
    opinion: true
  },
  {
    id: 3,
    bit: "Wonderful view of the city on a clear day.",
    opinion: true
  },
  {
    id: 4,
    bit: "I believe that it's healthy to take a stroll in fresh air and just being at ease in the hustle and bustle of San Francisco.  I got to take it in, reflect and be mindful here.",
    opinion: true
  },
  {
    id: 5,
    bit: "It's beautiful but what's all this Full-House talk about. The painted ladies were in the opening theme but not where they live. That house is in Lower Pac Heights" ,
    opinion: true
  },
  {
    id: 6,
    bit: 'Tourists. Tourists everywhere!',
    opinion: true
  }
]

function tidbits (state = defaultState, action) {
  switch (action.type) {
    case 'ADD_TIDBIT':
    return [ ...state, action.tidbit ]
    default:
      return state

      case 'TOGGLE_TIDBIT':
    const newState = state.map(tidbit => {
      if (tidbit.id === action.id) {
        tidbit.opinion = !tidbit.opinion
      }
      return tidbit
    })
    return newState

    case 'DELETE_TIDBIT':
    return state.filter(tidbit => tidbit.id != action.id)
   
  }
}

export default tidbits