import React, { FC, ReactNode } from 'react'
import Nav from './Nav'

interface SystemLayoutInterface  {
  children: ReactNode
}

const SystemLayout:FC<SystemLayoutInterface> = ({
  children
}) => {
  return (
    <div className="p-2">
      <Nav/>
      <div className="mt-20 px-20">
        {children}
      </div>

    </div>
  )
}

export default SystemLayout