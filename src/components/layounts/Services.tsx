import React from 'react'
import ServicAccordian from './ServicAccordian'
import ElectionVideo from "./ElectionVideo"

const Services = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols mt-16 gap-20'>
        <div>
       <div>
       <h1
            className="relative lg:text-[28px] md:text-[24px] 
           text-[20px] text-[#c05fe6] before:content-[''] font-bold before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[6px] before:bg-red-500 pl-4"
          >
            Services For Our Country !
          </h1>
          <p className="text-gray-500 md:text-[16px] text-[16px] pl-6 mt-2">
            Vote For Real Government.
          </p>
          <p className='text-[16px] text-red-500 mt-4'>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas.</p>
       </div>
       <div className='mt-6'>
        <ServicAccordian/>
       </div>
       </div>

       <div>
        <ElectionVideo/>
       </div>
      
    </div>
  )
}

export default Services
