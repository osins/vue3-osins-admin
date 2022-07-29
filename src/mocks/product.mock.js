import mockjs, { Random } from "mockjs"
import { v4 as uuidv4 } from "uuid"
import { API_PRODUCT_DETAIL, API_PRODUCT_LIST } from "../constants/api"
import { settlementMethods } from "./data"

export default function MockProductApi() {
  list()
  detail()
}

const list = () => {
  const data = []

  for (let i = 0; i < 6; i++) {
    data.push({
      id: uuidv4(),
      bankID: uuidv4(),
      recommand: Random.boolean(),
      title: "交通纯积分6w-38w",
      advantages: "价格高",
      minPoint: Random.integer(3000, 10000),
      minNumber: Random.integer(10000, 100000),
      memberPrice: Random.integer(1, 30),
      settlementMethod:
        settlementMethods[Random.integer(0, settlementMethods.length - 1)],
    })
  }

  mockjs.mock(API_PRODUCT_LIST, "get", data)
}

const detail = (mock) => {
  const items = []

  for (let i = 0; i < Random.integer(3, 10); i++) {
    items.push({
      id: uuidv4(),
      productID: uuidv4(),
      pointNumber: Random.integer(5000, 10000),
      name: `纯积分${Random.integer(1, 9)}w-${Random.integer(10, 50)}w`,
      exchangeNumber: Random.integer(1, 30000),
      memberPrice: Random.integer(1, 30),
    })
  }

  const data = {
    id: uuidv4(),
    recommand: Random.boolean(),
    title: "交通纯积分6w-38w",
    advantages: "价格高",
    minPoint: Random.integer(3000, 10000),
    minNumber: Random.integer(10000, 100000),
    memberPrice: Random.integer(1, 30),
    serviceNumber: Random.cname(),
    allowApplyOrder: Random.boolean(),
    items: items,
    content: `
    <div>
      <h2>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAOCAYAAAA45qw5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYwOEYxMzE0MUEzMTExRUFBQzIxOURENjE5REZEMkM0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYwOEYxMzE1MUEzMTExRUFBQzIxOURENjE5REZEMkM0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjA4RjEzMTIxQTMxMTFFQUFDMjE5REQ2MTlERkQyQzQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjA4RjEzMTMxQTMxMTFFQUFDMjE5REQ2MTlERkQyQzQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5I5KStAAABq0lEQVR42sSUsUvDQBTGXy7VYlsjFnHQtKCC/g2Ck1h0KC7iLLiKIir+BYJYFLSCg4ODq7gIgkPBQXB1KeKiS6ODaGljY2k1jd/BBYLmQtvFDz5y7Uve717y3inl1Cx5pMIaHIE7xH9f8CdsageZXlzX4DQ8KuIP8AWcpfw9BcaJ3lyQ4gFH4T6YkY+iGyvTqj64Q4qi+cWpbFbJeHbIcSLkLxNehM/JA+HQfil0fXlGTehHUqiJnAWjKwBK4k2ewXMuWBWV+qpzYjwOaIa/Hd8bvm0i44WaFM9xwotkYidMCk5NLqDSmDRVsUjUaFAL4rxVJhpJKhaLTgWmMT+oDaWZp3v9paojgfFarR3wGKP/UZ2JOZXLth8D4+FwO+AnJg4HqRoVKxfcKt3tgC+ZGGxpW9Zz16eYz4o0RRyHGWvpi3HePn/C9h5lf8A3t+92wdjE0vG9IRQi0geahTri9Hp1t2rxH7LKrb3DK8CXpJVrGM2EXsW8VwOgfO7mfx+ZLtyAS7xQsTtHrEvWbvYYiYew3obzoin5M3fwFvVoSWwsKY0TDbtQrh8BBgCoN3yr1pu2cAAAAABJRU5ErkJggg=="
        />
        兑换步骤详情
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAOCAYAAAA45qw5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYwMzZBNkNFMUEzMTExRUE4NzVGQkYwQUE5RTU1MTRFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYwMzZBNkNGMUEzMTExRUE4NzVGQkYwQUE5RTU1MTRFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjAzNkE2Q0MxQTMxMTFFQTg3NUZCRjBBQTlFNTUxNEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjAzNkE2Q0QxQTMxMTFFQTg3NUZCRjBBQTlFNTUxNEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6KFIp5AAABsUlEQVR42pyUv0rDUBTGz03aikkbwaqDpgUdRMQnEBwUBAdxEXwAR6EICn0CQRBdqriIfQD/DU6KQwfB1cXB2UaHYlVa09I/6fUcvIEizU3iB782ydecrze55zB+dgVdGkK2kGVkUlx7Rq6RHMxMg8yvbGY/8dtANCQq/BZSQyqI4waxruBV5BQZgF5irA7mGIcBQ+vpc151rNesvZ+7hd7qIO+ITSdKV+i5Z+hv4X4oWhpUKuDxxxJqyjzWtzNLHhUoawTR3ZNhJE+3QhBZbwDttpfLMHwvNjeblFSg16lScEa8l2Dq4BMrf3j7jMX7FufXJRUo06CPFQiralVqM11f8KmgUfBU6OBGU+6r6oRPhagC/xHz3Q4tH58rog/DKRaT+47z4lOhrYjmD6dEXL4c2y74VKhR8JGYKsGk4C3JQUkq/27cFfKyvqA8Ci4htP15oGBzFCAS8Yx1ila2ef9QllSg6eW4m+sSWaNGkWyoOqTMOhiG50oxdMM+OLyRrLT0d2SSLhBqg13kSexM+tEjsoOF0zin054+Y+M4p0/w+AtpiifIxTFds9xQ0o8AAwA0wYMFSF2zuwAAAABJRU5ErkJggg=="
        />
      </h2>
      <div>
        <p>
          <img
            src="https://kachao-online.oss-cn-beijing.aliyuncs.com/attachment/umeidtor/202009/07/b9960ad22651600b6063b9697a7d1589"
          />
        </p>
      </div>
    </div>
    `,
  }

  console.log("product detail: ", data)
  mockjs.mock(API_PRODUCT_DETAIL, "get", data)
}
