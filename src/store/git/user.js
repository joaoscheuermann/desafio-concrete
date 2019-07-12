const initialState = {
  avatar_url: '',
  name: '',
  login: '',
  company: '',
  location: '',
  followers: 0
}

const status = (state = initialState, {type, payload = {}}) => {
  switch (type) {
    case 'UPDATE_USER':
      const { avatar_url, name, login, company, location, followers } = payload
      return {
        ...initialState,
        login,
        avatar_url,
        name,
        company,
        location,
        followers
      }
    case 'CLEAR_USER':
      return {
        ...initialState
      }

    default:
      return state
  }
}

export default status