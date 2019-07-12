const initialState = {
  fetching: false,
  sucess: false,
  error: false,
  message: ''
}

const status = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCHING_DATA':
      return {
        ...initialState,
        fetching: true
      }

    case 'FAILED_FETCHING_DATA':
      return {
        ...initialState,
        error: true,
        message: action.erro.message
      }

    case 'SUCESS_FETCHING_DATA':
      return {
        ...initialState,
        sucess: true
      }

    default:
      return state
  }
}

export default status