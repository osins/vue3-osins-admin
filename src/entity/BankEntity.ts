export default interface BankEntity {
    id: number
    name: string
    recommand: boolean
    recommandTag: string
    settlementMethod: number
    settlementMethodTag: string
    orderType: number,
    orderTypeTag: string
    logo: string
    min: number
    serviceNumber: string
    allowApplyOrder: number
    queryMethod: string
    memo: string
}
