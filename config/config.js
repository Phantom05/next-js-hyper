import home from "@/database/home.json";
import common from "@/database/common.json";
export const apiAddress = "http://localhost:80";

//NOTE: api 함수에서 baseurl로 apiAddress 잡아둠
export const endpoint = {
  getHome: home,
  getTest: `https://jsonplaceholder.typicode.com/todos/2`,
  postLogin: `/login`,
  postRegister: `/register`,
};
