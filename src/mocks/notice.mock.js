import mockjs, { Random } from "mockjs"
import { fn } from "moment"
import { v4 as uuidv4 } from "uuid"
import { API_NOTICE_LIST, API_NOTICE_DETAIL } from "../constants/api"
import { banks } from "./data"
import { query } from "./utils"
export default function MockNoticeApi() {
  mocks.forEach((fn) => {
    fn()
  })
}

const mocks = [
  () => {
    const callback = (options) => {
      const params = query(options.url)
      console.log(
        API_NOTICE_LIST,
        "options: ",
        options,
        "params: ",
        query(options.url)
      )
      const data = []

      for (let i = 0; i < 30; i++) {
        const lastName = Random.cfirst()
        const bank = banks[Random.integer(0, banks.length - 1)]
        data.push({
          id: uuidv4(),
          type: params.get("type"),
          status: params.get("status"),
          title: `${lastName}**用户成功提交${bank}银行积分申请`,
          createdAt: Random.datetime("yyyy-MM-dd"),
          content: Random.sentence(8, 50),
        })
      }

      return data
    }

    const rurl = RegExp(`${API_NOTICE_LIST}(\\?type=\\d*|)`)
    console.log("notice list rurl:", rurl)
    mockjs.mock(rurl, "get", callback)
  },
  () => {
    const callback = (options) => {
      console.log("mock notice detail, callback options: ", options)
      const params = query(options.url)
      const lastName = Random.cfirst()
      const bank = banks[Random.integer(0, banks.length - 1)]
      const data = {
        id: uuidv4(),
        type: Random.integer(0, 4),
        status: params.get("status"),
        title: `${lastName}**用户成功提交${bank}银行积分申请`,
        createdAt: Random.datetime("yyyy-MM-dd"),
        content: Random.sentence(8, 50),
      }

      return data
    }

    const rurl = RegExp(`${API_NOTICE_DETAIL}\\?id=\\d*`)
    console.log("notice list rurl:", rurl)
    mockjs.mock(rurl, "get", callback)
  },
]
