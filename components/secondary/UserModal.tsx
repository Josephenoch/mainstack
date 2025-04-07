import React, { FC } from 'react'
import Overlay from '../ui/overlay'
import { useUser } from '@/context/UserContext';

type PropsType = {
  open: boolean;
  handleClose: () => void
}

const UserModal:FC<PropsType> = ({
  open,
  handleClose,
}) => {
  const {user} = useUser()
  return (
    <Overlay onClick={handleClose} opacity={20} open={open}>
     
      <div className="w-[380px] absolute h-fit bg-white right-4 top-20 rounded-[20px] shadow-lg p-4 space-y-8">
        <div className="flex items-center space-x-2">
          <span className="size-10 font-lg flex items-center justify-center uppercase bg-gradient-to-r from-[#5C6670] to-[#131316] rounded-full text-white font-bold">
            {`${user?.first_name?.[0]}${user?.last_name?.[0]}`}
          </span>
          <div className="flex flex-col justify-between py-1">
            <p className="text-xl font-bold">{`${user?.first_name} ${user?.last_name}`}</p>
            <p className="text-sm">{user?.email}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="size-5 border rounded-full"/>
          <p className="font-bold">Settings</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="size-5 border rounded-full"/>
          <p className="font-bold">Purchase History</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="size-5 border rounded-full"/>
          <p className="font-bold">Refer and Earn</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="size-5 border rounded-full"/>
          <p className="font-bold">Integrations</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="size-5 border rounded-full"/>
          <p className="font-bold">Report Bug</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="size-5 border rounded-full"/>
          <p className="font-bold">Switch Account</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="size-5 border rounded-full"/>
          <p className="font-bold">Sign Out</p>
        </div>
      </div>
    </Overlay>
  )
}

export default UserModal