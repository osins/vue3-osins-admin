import { createApp } from "vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import { i18n } from "./locales/i18n"
import App from "./App.vue"
import router from "./route"
import { MockInit } from "./mocks/mock"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

MockInit()
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus)
app.use(router)
app.use(i18n)

app.mount("#app")
