import mockjs, { Random } from "mockjs"
import { v4 as uuidv4 } from "uuid"
import { API_POINT_SEARCH_METHOD } from "../constants/api"
import { settlementMethods, banks, recommandTag, orderTypes } from "./data"
import { query } from "./utils"

export default function bulder() {
  mocks.forEach((fn) => {
    fn()
  })
}

const mocks = [
  () => {
    const callback = (options) => {
      const params = query(options.url)
      const keyword = params.get("keyword")
      console.log("url: ", options.url)
      console.log("keyword: ", params, params.get("keyword"))
      const data = []
      const source = []
      banks.forEach((v, i) => {
        source.push({ id: i, name: v })
      })
      const records =
        keyword === undefined || keyword == null || keyword.length == 0
          ? source
          : source.filter((v) => {
              console.log(
                `${v.name} includes ${keyword}: ${v.name.includes(keyword)}`
              )
              return v.name.includes(keyword)
            })

      for (const { i, name } of records) {
        const bank = {
          id: uuidv4(),
          name: name,
          recommandTag: recommandTag[Random.boolean()],
          settlementMethod:
            settlementMethods[Random.integer(0, settlementMethods.length - 1)],
          orderType: orderTypes[Random.integer(0, orderTypes.length - 1)],
          logo: `/assets/banks/${i}.jpg`,
          min: Random.integer(1000, 3000),
          serviceNumber: "kahe31",
          allowApplyOrder: Random.boolean(),
          memo: "",
          products: [],
          productCount: 0,
          goodsCount: 0,
          searchMethod: {
            sms: "编辑短信 【CXJF】 发送到95533",
            wechat: "关注中国建设银行，绑定信用卡，输入【积分】",
            tel: "客服电话：95533， 信用卡专线：4008009888",
            app: "中国建设银行",
          },
        }

        data.push(bank)
      }

      console.log("point search method api mock: ", data)

      return data
    }

    const rurl = RegExp(`${API_POINT_SEARCH_METHOD}(\\?keyword=[^&]*)*`)
    mockjs.mock(rurl, "get", callback)
  },
]
