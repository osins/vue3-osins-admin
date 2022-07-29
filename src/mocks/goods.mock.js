import mockjs, { Random } from "mockjs"
import { v4 as uuidv4 } from "uuid"
import {
  API_GOODS_DETAIL,
  API_GOODS_LIST,
  API_GOODS_REPORT,
} from "../constants/api"
import { settlementMethods, banks, recommandTag, orderTypes } from "./data"
import { ssrContextKey } from "vue"

export default function MockGoodsApi() {
  list()
  report()
}

const list = () => {
  const data = []
  for (const i in banks) {
    const bank = {
      id: uuidv4(),
      name: banks[i],
      recommandTag: recommandTag[Random.boolean()],
      settlementMethod:
        settlementMethods[Random.integer(0, settlementMethods.length - 1)],
      orderType: orderTypes[Random.integer(0, orderTypes.length - 1)],
      logo: `/assets/banks/${i}.jpg`,
      min: Random.integer(1000, 10000),
      serviceNumber: Random.cname(),
      allowApplyOrder: Random.boolean(),
      memo: "",
      productCount: 0,
      goodsCount: 0,
    }

    for (let i = 0; i < 6; i++) {
      const product = {
        id: uuidv4(),
        bank: bank,
        recommand: Random.boolean(),
        title: "交通纯积分6w-38w",
        advantages: "价格高",
        minPoint: Random.integer(3000, 10000),
        minNumber: Random.integer(10000, 100000),
        memberPrice: Random.float(1, 30),
        settlementMethod:
          settlementMethods[Random.integer(0, settlementMethods.length - 1)],
      }

      for (let i = 0; i < Random.integer(3, 10); i++) {
        data.push({
          id: uuidv4(),
          product: product,
          pointNumber: Random.integer(3000, 10000),
          name: `纯积分${Random.integer(1, 9)}w-${Random.integer(10, 50)}w`,
          exchangeNumber: Random.integer(1, 30000),
          memberPrice: Random.integer(1, 30),
          settlementMethod:
            settlementMethods[Random.integer(1, settlementMethods.length - 1)],
        })
      }
    }
  }

  mockjs.mock(API_GOODS_LIST, "get", data)
}

const report = () => {
  const data = []
  for (const i in banks) {
    const bank = {
      id: uuidv4(),
      name: banks[i],
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
    }

    for (let i = 0; i < 6; i++) {
      const product = {
        id: uuidv4(),
        bankID: bank.id,
        recommand: Random.boolean(),
        title: `${bank.name}纯积分6w-38w`,
        advantages: "价格高",
        minPoint: Random.integer(3000, 10000),
        minNumber: Random.integer(10000, 100000),
        memberPrice: Random.integer(1, 30),
        settlementMethod:
          settlementMethods[Random.integer(0, settlementMethods.length - 1)],
        goods: [],
      }

      for (let i = 0; i < Random.integer(3, 10); i++) {
        const goods = {
          id: uuidv4(),
          bankID: bank.id,
          productID: product.id,
          pointNumber: Random.integer(5000, 10000),
          name: `纯积分${Random.integer(1, 9)}w-${Random.integer(10, 40)}w`,
          exchangeNumber: Random.integer(1, 30000),
          memberPrice: Random.integer(1, 30),
          settlementMethod:
            settlementMethods[Random.integer(0, settlementMethods.length - 1)],
        }

        product.goods.push(goods)
        bank.goodsCount++
      }

      bank.products.push(product)
      bank.productCount++
    }

    data.push(bank)
  }

  console.log("goods report mock: ", data)
  mockjs.mock(API_GOODS_REPORT, "get", data)
}
