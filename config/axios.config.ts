import axios from "axios";

export const http = axios.create({
  withCredentials: false,
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL
})