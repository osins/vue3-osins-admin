import mockjs, { Random } from "mockjs"
import { v4 as uuidv4 } from "uuid"
import { API_USER_INFO } from "../constants/api"

export default function builder() {
  mocks.forEach((fn) => {
    fn()
  })
}

const mocks = [
  () => {
    const data = {
      id: uuidv4(),
      avatar: "/assets/icons/avatar.jpg",
      nickname: Random.cname(),
      mobile: Random.integer(18101800000, 18101899999),
      team: "金创团队",
      inviteCode: `PNCN${Random.integer(3000080, 3100080)}`,
    }

    mockjs.mock(API_USER_INFO, "get", data)
  },
]
