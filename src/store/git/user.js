const initialState = {
  avatar_url: '',
  name: '',
  company: '',
  location: '',
  followes: 0
}

const status = (state = initialState, {type, payload = {}}) => {
  switch (type) {
    case 'UPDATE_USER':
      const { avatar_url, name, company, location, followes } = payload
      return {
        ...state,
        avatar_url,
        name,
        company,
        location,
        followes
      }

    default:
      return state
  }
}

export default status