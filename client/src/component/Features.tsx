import React from 'react'

function Features({title , description}) {
  return (
    <div>
      <div className='border border-2 border-gray-800 sm:w-[300px] p-[24px] ml-[15px] w-[300px] h-[170px] dark:border-gray-500'>
         <h1 className='font-mono font-bold'>{title}</h1>
         <h3 className='font-mono text-[416x] mt-[5px]'>{description}</h3>
      </div>
     
    </div>
  )
}

export default Features
