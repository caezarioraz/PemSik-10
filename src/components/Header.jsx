import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='flex justify-between items-center bg-red-800 p-5 rounded-br-xl text-white'>
         <h1 className='text-2xl font-bold'>Welcome Ces!</h1>
         <div>
            <p className='font-bold text-2xl'>User</p>
         </div>
      </div>
    </div>
  )
}

export default Header
