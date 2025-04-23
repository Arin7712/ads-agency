import { snapShotItems } from '@/constants'
import React from 'react'

const AgencySnapShot = () => {
  return (
    <div className="flex lg:flex-row flex-col py-[6rem] md:gap-[12rem] gap-[4rem]">
      <div className='md:w-[30%]'>
        <h1 className='md:text-5xl text-3xl uppercase font-bold'>Agency Snapshot</h1>
      </div>
      <div className='grid md:grid-cols-2 gap-6 w-full gap-y-[6rem]'>
            {
                snapShotItems.map((item, index) => (
                    <div key={index}>
                    <div className='md:flex flex-col gap-6 md:w-[20rem] hidden'>
                        <h1 className='text-3xl uppercase font-bold'>{item.title}</h1>
                        <h1 className='text-[5rem] leading-none font-bold'>{item.num}</h1>
                        <p className='font-medium'>{item.description}</p>
                    </div>
                    
                    <div className='flex w-full justify-between gap-6 md:w-[20rem] md:hidden'>
                        <div>
                        <h1 className='text-4xl leading-none font-bold'>{item.num}</h1>
                        </div>
                        <div className='w-[70%] space-y-3'>
                        <h1 className='text-xl uppercase font-bold'>{item.title}</h1>
                        <p className='font-medium'>{item.description}</p>
                        </div>
                    </div>
                    </div>
                    
                ))
            }
      </div>
    </div>
  )
}

export default AgencySnapShot
