import mockjs, { Random } from "mockjs"
import { API_BANK_DETAIL, API_BANK_LIST } from "../constants/api"
import BankEntity from "../entity/BankEntity"
import { banks, recommandTag, settlementMethods, orderTypes } from "../constants/settings"
import { query } from "./utils"

export default function MockBankApi() {
  for (const fn of commands) {
    console.log("mock bank: ", fn)
    fn()
  }
}

const commands = [
  () => {
    const data: BankEntity[] = []

    banks.forEach((v, i) => {
      data.push({
        id: i,
        name: v,
        recommand: Random.boolean(),
        recommandTag: recommandTag[Random.integer(0, recommandTag.length - 1)],
        settlementMethod: Random.integer(0, settlementMethods.length - 1),
        settlementMethodTag:
          settlementMethods[Random.integer(0, settlementMethods.length - 1)],
        orderType: Random.integer(0, orderTypes.length - 1),
        orderTypeTag: orderTypes[Random.integer(0, orderTypes.length - 1)],
        logo: `/assets/banks/${i}.jpg`,
        min: Random.integer(1000, 10000),
        serviceNumber: Random.cname(),
        allowApplyOrder: Random.integer(3000, 8000),
        queryMethod: "预留手机号拨打4008009888>卡号后4位数#>查询密码#>1>5>1",
        memo: `中国银行是中国持续经营时间最久的银行。1912年2月正式成立，先后行使中央银行、国际汇兑银行和国际贸易专业银行职能。1949年以后，长期作为国家外汇外贸专业银行，统一经营管理国家外汇，开展国际贸易结算、侨汇和其他非贸易外汇业务。1994年改组为国有独资商业银行，全面提供各类金融服务，发展成为本外币兼营、业务品种齐全、实力雄厚的大型商业银行。2006年率先成功在香港联交所和上海证券交易所挂牌上市，成为国内首家“A+H”上市银行。中国银行是2008年北京夏季奥运会和2022年北京冬季奥运会唯一官方银行合作伙伴，是中国唯一的“双奥银行”。2011年，中国银行在新兴经济体中首家入选并在此后连续11年入选全球系统重要性银行，国际地位、竞争能力、综合实力已跻身全球大型银行前列。2022年，迎来110周年华诞的中国银行，正在构建以境内商业银行为主体、全球化综合化为两翼的战略格局，加快建设全球一流现代银行集团，奋力书写百年历史新篇章。

中国银行是中国全球化和综合化程度最高的银行，在中国内地及境外62个国家和地区设有机构，中银香港、澳门分行担任当地的发钞行。中国银行拥有比较完善的全球服务网络，形成了公司金融、个人金融和金融市场等商业银行业务为主体，涵盖投资银行、直接投资、证券、保险、基金、飞机租赁、资产管理、金融科技、金融租赁等多个领域的综合服务平台，为客户提供“一点接入、全球响应、综合服务”的金融解决方案。

中国银行是拥有崇高使命感和责任感的银行。110年来，始终心系民族、奉献国家，为国家富强、民族复兴持续奋斗、百年不渝；始终根植人民、卓越服务，履行金融为民、富民、惠民、便民之责任；始终胸怀天下、开放包容，调动境内境外两种资源，服务中国与世界的双向互动；始终遵循规律、稳健创造，诚信立行、创新兴行。在全面建设社会主义现代化国家的新征程上，中国银行作为国有控股大型商业银行，将坚持以习近平新时代中国特色社会主义思想为指导，继续发扬“百年老店”追求卓越的优良传统，完整、准确、全面贯彻新发展理念，服务构建新发展格局，自觉担负起“融通世界、造福社会”的崇高使命，践行“卓越服务、稳健创造、开放包容、协同共赢”价值观，激发活力、敏捷反应、重点突破，奋力建设全球一流现代银行集团，促进高水平对外开放，推动经济社会高质量发展，为实现中华民族伟大复兴的中国梦作出新的更大贡献。`,
      })
    })

    mockjs.mock(API_BANK_LIST, "get", data)
  },
  () => {
    const callback = (options: any): BankEntity => {
      console.log(API_BANK_DETAIL, "options：", options)
      const { url, type, body } = options
      const params: URLSearchParams | null = query(url)
      const idVal = params?.get("id")
      const id: number = idVal ? parseInt(idVal) : 0
      return {
        id: id,
        name: banks[id],
        recommand: Random.boolean(),
        recommandTag: recommandTag[Random.integer(0, 1)],
        settlementMethod: Random.integer(0, settlementMethods.length - 1),
        settlementMethodTag:
          settlementMethods[Random.integer(0, settlementMethods.length - 1)],
        orderType: Random.integer(0, orderTypes.length - 1),
        orderTypeTag: orderTypes[Random.integer(0, orderTypes.length - 1)],
        logo: `/assets/banks/${id}.jpg`,
        min: Random.integer(1000, 10000),
        serviceNumber: Random.cname(),
        allowApplyOrder: Random.integer(3000, 10000),
        queryMethod: "预留手机号拨打4008009888>卡号后4位数#>查询密码#>1>5>1",
        memo: `中国银行是中国持续经营时间最久的银行。1912年2月正式成立，先后行使中央银行、国际汇兑银行和国际贸易专业银行职能。1949年以后，长期作为国家外汇外贸专业银行，统一经营管理国家外汇，开展国际贸易结算、侨汇和其他非贸易外汇业务。1994年改组为国有独资商业银行，全面提供各类金融服务，发展成为本外币兼营、业务品种齐全、实力雄厚的大型商业银行。2006年率先成功在香港联交所和上海证券交易所挂牌上市，成为国内首家“A+H”上市银行。中国银行是2008年北京夏季奥运会和2022年北京冬季奥运会唯一官方银行合作伙伴，是中国唯一的“双奥银行”。2011年，中国银行在新兴经济体中首家入选并在此后连续11年入选全球系统重要性银行，国际地位、竞争能力、综合实力已跻身全球大型银行前列。2022年，迎来110周年华诞的中国银行，正在构建以境内商业银行为主体、全球化综合化为两翼的战略格局，加快建设全球一流现代银行集团，奋力书写百年历史新篇章。

中国银行是中国全球化和综合化程度最高的银行，在中国内地及境外62个国家和地区设有机构，中银香港、澳门分行担任当地的发钞行。中国银行拥有比较完善的全球服务网络，形成了公司金融、个人金融和金融市场等商业银行业务为主体，涵盖投资银行、直接投资、证券、保险、基金、飞机租赁、资产管理、金融科技、金融租赁等多个领域的综合服务平台，为客户提供“一点接入、全球响应、综合服务”的金融解决方案。

中国银行是拥有崇高使命感和责任感的银行。110年来，始终心系民族、奉献国家，为国家富强、民族复兴持续奋斗、百年不渝；始终根植人民、卓越服务，履行金融为民、富民、惠民、便民之责任；始终胸怀天下、开放包容，调动境内境外两种资源，服务中国与世界的双向互动；始终遵循规律、稳健创造，诚信立行、创新兴行。在全面建设社会主义现代化国家的新征程上，中国银行作为国有控股大型商业银行，将坚持以习近平新时代中国特色社会主义思想为指导，继续发扬“百年老店”追求卓越的优良传统，完整、准确、全面贯彻新发展理念，服务构建新发展格局，自觉担负起“融通世界、造福社会”的崇高使命，践行“卓越服务、稳健创造、开放包容、协同共赢”价值观，激发活力、敏捷反应、重点突破，奋力建设全球一流现代银行集团，促进高水平对外开放，推动经济社会高质量发展，为实现中华民族伟大复兴的中国梦作出新的更大贡献。`,
      }
    }

    const rurl = `${API_BANK_DETAIL}\\?id\\=.*`
    console.log("bank detail rurl: ", rurl)
    mockjs.mock(RegExp(rurl), "get", callback)
  },
]
