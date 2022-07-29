import { client, method } from "./api"
import {
  API_GOODS_LIST,
  API_GOODS_DETAIL,
  API_GOODS_REPORT,
} from "../constants/api"

export const list = client({ method: method.GET, url: API_GOODS_LIST })
export const report = client({ method: method.GET, url: API_GOODS_REPORT })
export const detail = client({
  method: method.GET,
  url: API_GOODS_DETAIL,
  dataFormat: (data) => {
    data.items.forEach((v) => (v.selected = false))
    return data
  },
})
