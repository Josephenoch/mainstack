import { AxiosPromise } from "axios";
import { http } from "@/config/axios.config";
import { Transaction } from "@/types/transaction.type";

export const fetchTransactionRequest = () => {
  return http.get("/transactions") as AxiosPromise<Transaction[]>
}