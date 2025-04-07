import { http } from "@/config/axios.config"

const fetchWalletRequest = () => {
  return http.get("/wallet")
}