const headers = {
  'Content-Type': 'application/json'
}

const processResponse = (result) => {
  return result
    .then((res) => res.json())
    .then(async (res) => {
      let result = res
      result = { data: res }
      return result
    })
    .catch((error) => {
      return { error }
    })
}

const processesRequest = async (request, method, params, optionalsHeaders) => {
  const init = {
    method,
    headers: optionalsHeaders ? { ...headers, ...optionalsHeaders } : headers
  }
  if (method !== 'GET') init.body = JSON.stringify({ params })
  const response = fetch(request, init)
  return processResponse(response)
}

const api = (urlBase) => ({
  async get(endpoint, params = null, optionalsHeaders) {
    return processesRequest(
      `${urlBase}${endpoint}`,
      'GET',
      params,
      optionalsHeaders
    )
  }
})

export default api