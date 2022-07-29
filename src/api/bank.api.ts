import { client, method } from "./api"
import { API_BANK_LIST, API_BANK_DETAIL } from "../constants/api"

export const list = client({ method: method.GET, url: API_BANK_LIST })
export const detail = client({ method: method.GET, url: API_BANK_DETAIL })
