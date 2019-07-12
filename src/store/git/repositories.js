const initialState = []

const repositories = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_REPOSITORIES':
      const payload = action.payload ? action.payload : []
      return [...state, ...payload]

    default:
      return state
  }
}

export default repositories