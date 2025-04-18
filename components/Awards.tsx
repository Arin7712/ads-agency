import { awardItems } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Awards = () => {
  return (
    <div className="flex justify-center py-[6rem] md:py-[12rem] md:mx-[6rem] mx-6 border-b-zinc-800 border-b-[1px] mb-10 text-neutral-800">
      <div className="w-full overflow-x-auto">
        <table className="w-full table-auto">
          <tbody>
            <tr className="flex justify-between gap-4 md:px-[6rem] flex-wrap">
              {awardItems.map((item, index) => (
                <td key={index} className="md:w-[200px] w-[100px] flex flex-col items-center group cursor-pointer">
                  <div className="md:w-[200px] md:h-[200px] w-[100px] h-[100px] flex items-center justify-center overflow-hidden">
                    <Image
                      src={item.img}
                      alt="logo"
                      width={200}
                      height={200}
                      className="object-contain transition-all duration-300 group-hover:scale-110 md:block hidden"
                    />
                    <Image
                      src={item.img}
                      alt="logo"
                      width={200}
                      height={200}
                      className="object-contain transition-all duration-300 group-hover:scale-110 md:hidden block"
                    />
                  </div>
                  <p className="uppercase text-[10px] md:text-xs font-medium underline-offset-2 transition-all group-hover:underline text-center mt-2">
                    {item.name}
                  </p>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Awards
