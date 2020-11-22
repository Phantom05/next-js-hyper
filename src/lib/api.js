import axios from "axios";
import { endpoint, apiAddress } from "@/config/config";
import { cacheAdapterEnhancer } from "axios-extensions";
import axiosCancel from "axios-cancel";

export const http = axios.create({
  baseURL: apiAddress,
  adapter: cacheAdapterEnhancer(axios.defaults.adapter, {
    enabledByDefault: false,
  }),
});

axiosCancel(http, {
  debug: false, // process.env.NODE_ENV === 'development'
});

const historyPopCache = (config) => ({
  forceUpdate: history.action === "PUSH",
  ...config,
  cache: true,
});

export const getUserApi = () => axios.get(endpoint.getTest);

/**
 * NOTE: 백엔드 서버 생기면 모두 api 함수로 수정하고 데이터 바인딩 현재는 그냥 json 읽는걸로
 */

// SECTION: main home page
export const Home = {
  main: ({ config } = {}) => {
    // return http.get(endpoint.getHome, historyPopCache(config));
    return endpoint.getHome;
  },
  test: () => http.get(endpoint.getTest, {}),
};

// SECTION: auth page
export const Auth = {
  login: ({ email, password, config } = {}) => {
    return http.post(endpoint.postLogin, { user: { email, password } }, config);
  },
  register: ({ username, email, password, config } = {}) => {
    return http.post(
      endpoint.postRegister,
      { user: { username, email, password } },
      config
    );
  },
};
