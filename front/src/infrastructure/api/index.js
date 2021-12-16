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
  const response = fetch(request, {
    method,
    headers: optionalsHeaders ? { ...headers, ...optionalsHeaders } : headers,
    ...(params ? { body: JSON.stringify({ params }) } : {}),
  })
  return processResponse(response)
}

const api = (urlBase) => ({
  async get(endpoint, params = null, optionalsHeaders = null) {
    return processesRequest(
      `${urlBase}${endpoint}`,
      'GET',
      params,
      optionalsHeaders
    )
  }
})

export default api