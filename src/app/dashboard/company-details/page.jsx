'use client'
import React from 'react'
import Image from 'next/image'

function CompanyDescription() {
    const submitForm = (e) => {
        e.preventDefault()
        console.log('Form Submitted')
    }
    return (
        <>
            <div className='flex flex-col overflow-auto gap-y-6 h-screen w-screen justify-center items-center md:pt-[600px]'>
                <Image width={150} height={150} className='mt-96' src="/_next/static/media/dgplogo.2d01d1bc.svg" alt="" />
                <div className='text-3xl font-bold mb-20'>Company Description</div>
                <form onSubmit={submitForm} action="submit" className='w-[50%]'>
                    <div className='text-xl font-bold mb-4'>Company name</div>
                    <input type="text" className='p-4 w-full border mb-4 rounded-lg border-black bg-gray-200' placeholder='Company Name' />
                    <div className='text-xl font-bold mb-4'>Job Description</div>
                    <textarea type="text" className='p-4 w-full h-36 mb-4 border rounded-lg border-black bg-gray-200' placeholder='Job Description' />
                    <div className='flex gap-x-6 justify-between'>
                        <div className='flex flex-col w-full'>
                            <div className='text-xl font-bold mb-4'>Deadline</div>
                            <input type="text" className='p-4 w-full border mb-4 rounded-lg border-black bg-gray-200' placeholder='Deadline' />
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='text-xl font-bold mb-4'>Role</div>
                            <input type="text" className='p-4 w-full border mb-4 rounded-lg border-black bg-gray-200' placeholder='Role' />
                        </div>
                    </div>
                    <div className='text-xl font-bold mb-4'>Office contact number</div>
                    <input type="text" className='p-4 w-full border mb-4 rounded-lg border-black bg-gray-200' placeholder='Office contact number' />
                    <div className='flex gap-x-6 justify-between'>
                        <div className='flex flex-col w-full'>
                            <div className='text-xl font-bold mb-4'>Industry</div>
                            <select className='p-4 w-full border mb-4 rounded-lg border-black bg-gray-200' placeholder='Deadline'>
                                <option value="" disabled selected hidden>Please Choose...</option>
                                <option value="IT">IT</option>
                            </select>
                        </div>
                        <div className='flex flex-col w-full'>
                            <div className='text-xl font-bold mb-4'>Organization Type</div>
                            <select className='p-4 w-full border mb-4 rounded-lg border-black bg-gray-200' placeholder='Type'>
                                <option value="" disabled selected hidden>Please Choose...</option>
                                <option value="IT">IT</option>
                            </select>
                        </div>
                    </div>
                    <div className='text-xl font-bold mb-4'>CTC</div>
                    <input type="text" className='p-4 w-full border mb-4 rounded-lg border-black bg-gray-200' placeholder='CTC' />
                    <div className='text-xl font-bold mb-4'>Website</div>
                    <input type="text" className='p-4 w-full border mb-4 rounded-lg border-black bg-gray-200' placeholder='Website Link' />
                    <div className='text-xl font-bold mb-4'>Elegibility</div>
                    <div className='flex flex-col gap-y-4 mb-10'>
                        <div className='flex items-center justify-between'>
                            <div className='text-xl font-bold text-center'>CGPA</div>
                            <input type="text" className='p-4 w-[50%] border rounded-lg border-black bg-gray-200' placeholder='CGPA' />
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='text-xl font-bold text-center'>Department</div>
                            <input type="text" className='p-4 w-[50%] border rounded-lg border-black bg-gray-200' placeholder='Department' />
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='text-xl font-bold text-center'>Backlogs</div>
                            <select type="text" className='p-4 w-[50%] border rounded-lg border-black bg-gray-200' >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='text-xl font-bold text-center'>Supplementary</div>
                            <select type="text" className='p-4 w-[50%] border rounded-lg border-black bg-gray-200' >
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='text-xl font-bold text-center'>Gap Year</div>
                            <input type="text" className='p-4 w-[50%] border rounded-lg border-black bg-gray-200' placeholder='Gap Year' />
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='text-xl font-bold text-center'>Gender</div>
                            <input type="text" className='p-4 w-[50%] border rounded-lg border-black bg-gray-200' placeholder='Gender' />
                        </div>
                    </div>
                    <button className='bg-blue-400 text-white w-20 p-4 text-center mb-4 rounded-md '>Submit</button>
                </form>
            </div>
        </>
    )
}

export default CompanyDescription