const initialState = {
  fetching: false,
  error: false,
  message: 'batata',
  user: null,
  repos: null
}

const git = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCHING_DATA':
      return {
        ...initialState,
        fetching: true
      }
    case 'SUCESS_FETCHING_DATA':
      return {
        ...initialState,
        error: true,
        message: action.erro.message
      }
    case 'FAILED_FETCHING_DATA':
      return {
        ...initialState,
        error: true,
        message: action.erro.message
      }

    default:
      return state
  }
}

export default git