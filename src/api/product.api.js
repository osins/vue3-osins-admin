import { inject } from "vue"
import { client, method } from "./api"
import { API_PRODUCT_DETAIL, API_PRODUCT_LIST } from "../constants/api"

export const list = client({ method: method.GET, url: API_PRODUCT_LIST })
export const detail = client({
  method: method.GET,
  url: API_PRODUCT_DETAIL,
  dataFormat: (data) => {
    data.items.forEach((v) => (v.selected = false))
    return data
  },
})
