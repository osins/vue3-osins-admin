import { inject } from "vue"
import { client, method } from "./api"
import { API_ADS_BANNER } from "../constants/api"

export const banner = client({ method: method.GET, url: API_ADS_BANNER })
