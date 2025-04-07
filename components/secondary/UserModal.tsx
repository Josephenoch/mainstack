import React, { FC } from 'react'
import Overlay from '../ui/overlay'

type PropsType = {
  open: boolean;
  handleClose: () => void
}

const UserModal:FC<PropsType> = ({
  open,
  handleClose,
}) => {
  return (
    <Overlay onClick={handleClose} opacity={20} open={open}>
      <div className="w-[400px] absolute h-fit bg-white right-4 top-20 rounded-[20px] shadow-lg">
      </div>
    </Overlay>
  )
}

export default UserModal