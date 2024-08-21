import React from 'react'
import Image from 'next/image'

function AdminLogin() {
    return (
        <>
            <div className='flex flex-col gap-y-6 h-screen w-screen justify-center items-center'>
                <Image width={150} height={150} src="/_next/static/media/dgplogo.2d01d1bc.svg" alt="" />
                <div className='text-xl font-bold'>Admin Registration</div>
                <button className='w-96 text-center h-20 font-bold rounded-xl bg-gray-300'>Continue with NIT Durgapur Mail</button>
            </div>
        </>
    )
}

export default AdminLogin