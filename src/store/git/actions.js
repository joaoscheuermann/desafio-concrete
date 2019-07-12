// Add fetching actions
export const startFetching = () => ({
  type: 'START_FETCHING_DATA'
})

export const failedFetching = (erro) => ({
  type: 'FAILED_FETCHING_DATA',
  erro
})

export const sucessFetching = (payload) => ({
  type: 'SUCESS_FETCHING_DATA',
  payload
})

export const updateUser = (payload) => ({
  type: 'UPDATE_USER',
  payload
})

export const clearUser = (payload) => ({
  type: 'CLEAR_USER',
  payload
})

export const updateRepositories = (payload) => ({
  type: 'UPDATE_REPOSITORIES',
  payload
})

export const clearRepositories = (payload) => ({
  type: 'CLEAR_REPOSITORIES',
  payload
})

export const fetchGithubUserData = (username) => async dispatch => {
    const fetchGit = async (username, route='') => {
      return fetch(`https://api.github.com/users/${username}${route}`)
              .then(resposta => resposta.json())
    }

    dispatch(startFetching())
    dispatch(clearUser())
    dispatch(clearRepositories())

    const user = await fetchGit(username)
    const repositories = await fetchGit(username, '/repos')


    if (user.message) {
      dispatch(failedFetching({ message: user.message }))
      return
    }

    dispatch(sucessFetching())
    dispatch(updateUser(user))
    dispatch(updateRepositories(repositories))
}
