const initialState = []

const repositories = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_REPOSITORIES':
      const payload = action.payload ? action.payload : []
      return [...initialState, ...payload]

    case 'CLEAR_REPOSITORIES':
      return initialState

    default:
      return state
  }
}

export default repositories