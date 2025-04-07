import React, { FC } from 'react'
import Overlay from '../ui/overlay'

type PropsType = {
  open: boolean;
}

const UserModal:FC<PropsType> = ({
  open
}) => {
  return (
    <Overlay blur opacity={20} open={open}>
      <div></div>
    </Overlay>
  )
}

export default UserModal