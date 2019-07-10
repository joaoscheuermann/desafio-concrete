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

export const fetchGithubUserData = (username) => async dispatch => {
    const fetchGit = async (username, route='') => {
      return fetch(`https://api.github.com/users/${username}${route}`)
              .then(resposta => resposta.json())
    }

    dispatch(startFetching())

    const user = await fetchGit(username)
    const repos = await fetchGit(username, '/repos')
    const starred = await fetchGit(username, '/starred')

    console.log(user.message)

    if (user.message) {
      dispatch(failedFetching({ message: user.message }))
      return
    }

    dispatch(sucessFetching({ payload: { user, repos, starred } }))
}
