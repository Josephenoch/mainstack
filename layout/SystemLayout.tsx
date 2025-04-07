import React, { FC, ReactNode } from 'react'
import Nav from './Nav'

interface SystemLayoutInterface  {
  children: ReactNode
}

const SystemLayout:FC<SystemLayoutInterface> = ({
  children
}) => {
  return (
    <div className="p-2 bg-white/80 mb-10">
      <Nav/>
      <div className="mt-36 px-40">
        {children}
      </div>

    </div>
  )
}

export default SystemLayout