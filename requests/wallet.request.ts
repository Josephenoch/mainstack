import { AxiosPromise } from "axios";
import { http } from "@/config/axios.config";
import { Wallet } from "@/types/wallet.type";

export const fetchWalletRequest = () => {
  return http.get("/wallet") as AxiosPromise<Wallet>
}