import { client, method } from "./api"
import { API_POINT_SEARCH_METHOD } from "../constants/api"

export const searchMethod = client({
  method: method.GET,
  url: API_POINT_SEARCH_METHOD,
})
