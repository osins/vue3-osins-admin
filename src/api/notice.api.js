import { inject } from "vue"
import { client, method } from "./api"
import { API_NOTICE_LIST, API_NOTICE_DETAIL } from "../constants/api"
import moment from "moment"

const dataFormat = (data) => {
  var dayMS = 24 * 60 * 60 * 1000
  const now = moment().local()
  const createdAt = moment(data.createdAt)
  data.createdAtShortFormatString =
    now.diff(createdAt, "day") > 1 ? createdAt.format("YYYY-MM-DD") : "昨天"
  data.createdAtLongFormatString = createdAt.format("YYYY-MM-DD HH:mm:ss")

  return data
}

export const list = client({
  method: method.GET,
  url: API_NOTICE_LIST,
  dataFormat: (data) => {
    data.forEach(dataFormat)

    return data
  },
})

export const detail = client({
  method: method.GET,
  url: API_NOTICE_DETAIL,
  dataFormat: dataFormat,
})
