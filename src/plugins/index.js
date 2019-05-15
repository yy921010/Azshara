import Vue from 'vue'
import axios from './Axios'
import mokimo from 'moko'
import dayjs from './Dayjs'
import remixicon from 'remixicon/fonts/remixicon.symbol.svg'
import 'moko/dist/mokimo.css'

Vue.use(axios, {
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
Vue.use(mokimo, {
  svgSymbol: remixicon
})
Vue.use(dayjs)
