import { create } from "./BaseService";

const http = create()

export const getUserInfo = (userId) => {
  return http.get(`/users/me/${userId}`)
}