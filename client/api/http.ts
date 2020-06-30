import axios, { AxiosInstance, AxiosResponse } from 'axios'
import LRU from 'lru-cache'

let __useCache = true
export const enableCache = () => {
  __useCache = true
}
export const disableCache = () => {
  __useCache = false
}

const CACHED = new LRU<string, AxiosResponse<any>>({
  max: 1000,
})

const http = axios.create({
  baseURL: '/api',
})

export interface APIResponse<T = any> {}

http.interceptors.response.use(res => {
  const response: APIResponse = res.data
  return res
})

const createRequest = (instance: AxiosInstance) => async (
  ...params: Parameters<AxiosInstance>
) => {
  const key = params[0]
  if (__useCache && CACHED.has(key)) {
    return Promise.resolve(CACHED.get(key))
  }
  const res = await instance(...params)
  if (__useCache) {
    CACHED.set(key, res, 1000 * 60 * 60 * 2)
  }
  return res
}

export const requestApi = createRequest(http)
export const request = createRequest(axios)
