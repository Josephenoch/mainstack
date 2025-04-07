import { fetchUserRequest } from '@/requests/user.request'
import { User } from '@/types/user.type'
import { useQuery } from '@tanstack/react-query'
import React, { createContext, FC, ReactNode, useContext } from 'react'


type UserContextType = {
  user: User | undefined
}

type PropsType = {
  children: ReactNode
}

const UserContext = createContext<UserContextType>({
  user: undefined
})

export const useUser = () => useContext(UserContext)

const UserProvider:FC<PropsType> = ({
  children
}) => {
  const user = useQuery({
    queryKey: ['user'],
    queryFn: fetchUserRequest
  })
  return (
    <UserContext.Provider value={{ user: user.data?.data }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider