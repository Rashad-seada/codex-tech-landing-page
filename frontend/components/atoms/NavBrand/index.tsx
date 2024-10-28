import useMobileDeviceDetection from 'hooks/useMobileDetection'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBrand = () => {
  const isMobile = useMobileDeviceDetection()
  return (
    <>
      <div
        className={`select-none ${
          isMobile ? 'cursor-default' : 'cursor-pointer'
        }`}
      >
        <Link href={'/'} passHref>
          <div className="w-fit h-fit">
            {/* <Image src={'/images/whitelogo.png'} width='149px' height={100} alt='company brand' loading='lazy' /> */}
            <h1 className=' text-gray-300' >
            Codex-Tech
            </h1>
          </div>
        </Link>
      </div>
    </>
  )
}

export default NavBrand
