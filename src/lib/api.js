import axios from "axios";
export const getUserApi = () =>
  axios.get("https://jsonplaceholder.typicode.com/todos/2");
