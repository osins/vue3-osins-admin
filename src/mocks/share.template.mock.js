import mockjs, { Random } from "mockjs"
import { v4 as uuidv4 } from "uuid"
import { API_SHARE_TEMPLATE_LIST } from "../constants/api"

export default function builder() {
  mocks.forEach((fn) => fn())
}

const mocks = [
  () => {
    const callback = (options) => {
      const data = []

      for (let i = 0; i < 6; i++) {
        data.push({
          id: uuidv4(),
          realname: "彭文豪",
          avatar: `/assets/icons/avatar.jpg`,
          content: `平安车押贷<br />
            不押车，利润低<br />
            放款快（最快一天放款）<br />
            提额高（最高100玩）<br />
            十年内皆可做！有兴趣的老板快找我了解！`,
        })
      }

      return data
    }

    const rurl = RegExp(`${API_SHARE_TEMPLATE_LIST}(\\?keyword=[^&]*)*`)
    mockjs.mock(rurl, "get", callback)
  },
]
