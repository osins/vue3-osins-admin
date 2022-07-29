import { inject } from "vue"
import { client, method } from "./api"
import { API_SHARE_TEMPLATE_LIST } from "../constants/api"

export const list = client({ method: method.GET, url: API_SHARE_TEMPLATE_LIST })
