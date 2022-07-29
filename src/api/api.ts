import { reactive } from "vue"
import axios, { AxiosRequestConfig } from "axios"

export const method = {
  GET: "get",
  POST: "post",
  DELETE: "delete",
  PUT: "put",
}

export interface ClientOptions {
  method: string
  url: string
  dataFormat?: any
}

export interface LoadOptions {
  params?: any,
  data?: any
}

export const client = (options: ClientOptions): [state: any, load: (options?: LoadOptions) => void] => {
  const { method, url, dataFormat } = options
  console.log(
    "medthod: ",
    method,
    "url: ",
    url,
    "data: ",
    "dataFormat: ",
    dataFormat
  )

  const state = reactive({
    data: [],
  })

  const load = (options?: LoadOptions) => {
    const { params, data } = options || {}
    const config: AxiosRequestConfig<any> = {
      method: method,
      url: url,
    }

    if (params !== undefined) {
      console.log("params: ", params)
      config.params = params
    }

    if (data !== undefined) {
      config.data = data
    }

    axios(config).then((res) => {
      console.log("api", url, res)
      console.log("api", url, res.data)

      if (dataFormat !== undefined) {
        state.data = dataFormat(res.data)
      } else {
        state.data = res.data
      }
    })
  }

  return [state, load]
}
