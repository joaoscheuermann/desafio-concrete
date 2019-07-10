const initialState = {
  fetching: false,
  sucess: false,
  error: false,
  message: 'batata',
  user: null
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
        sucess: true,
        // Processar e normatizar os dados
        user: action.erro.message
      }

    default:
      return state
  }
}

export default git