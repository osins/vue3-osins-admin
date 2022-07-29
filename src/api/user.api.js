import { client, method } from "./api"
import { API_USER_INFO } from "../constants/api"

export const info = client({ method: method.GET, url: API_USER_INFO })
