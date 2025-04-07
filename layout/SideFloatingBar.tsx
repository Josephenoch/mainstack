import Image from 'next/image'
import React from 'react'

const SideFloatingBar = () => {
  return (
    <div className="fixed shadow-[0px_6px_6px_0px_#5C738314,0px_4px_8px_0px_#5C738314] rounded-full px-3 bg-white fixed-4 flex flex-col py-4 items-center space-y-6 top-1/2 -translate-y-1/2">
      <Image  
        width={24}
        height={24}
        alt="product icon"
        src="/svg/product_icon.svg"
      />
      <Image  
        width={24}
        height={24}
        alt="app bar icon"
        src="/svg/app_bar.svg"
      />
      <Image  
        width={24}
        height={24}
        alt="case icon"
        src="/svg/case.svg"
      />
      <Image  
        width={24}
        height={24}
        alt="file icon"
        src="/svg/file.svg"
      />

    </div>
  )
}

export default SideFloatingBar