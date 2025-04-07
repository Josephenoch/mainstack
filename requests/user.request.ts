import { AxiosPromise } from "axios";
import { User } from "@/types/user.type";
import { http } from "@/config/axios.config";

export const fetchUserRequest = () => {
  return http.get("/user") as AxiosPromise<User>
}