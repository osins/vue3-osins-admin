import mockjs, { Random } from "mockjs"
import { v4 as uuidv4 } from "uuid"
import { API_ACCOUNT_INFO } from "../constants/api"

export default function builder() {
  mocks.forEach((fn) => {
    fn()
  })
}

const mocks = [
  () => {
    const incomeMax = Random.integer(10, 30000, 2)

    const data = {
      id: uuidv4(),
      balance: Random.integer(10, 30000),
      incomeAll: incomeMax,
      incomeMonth: Random.integer(0, incomeMax),
    }

    mockjs.mock(API_ACCOUNT_INFO, "get", data)
  },
]
