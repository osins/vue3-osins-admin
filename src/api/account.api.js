import { client, method } from "./api"
import { API_ACCOUNT_INFO } from "../constants/api"

export const info = client({ method: method.GET, url: API_ACCOUNT_INFO })
