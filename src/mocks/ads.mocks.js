import mockjs, { Random } from "mockjs"
import { v4 as uuidv4 } from "uuid"
import { API_ADS_BANNER } from "../constants/api"

export default function MockAdsApi() {
  banner()
}

const banner = () => {
  const data = []

  for (let i = 0; i < 6; i++) {
    data.push({
      id: uuidv4(),
      img: `/assets/ads/${i}.webp`,
      url: "",
    })
  }

  mockjs.mock(API_ADS_BANNER, "get", data)
}
