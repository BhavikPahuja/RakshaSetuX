import React from 'react'

const Dashboard = () => {
  return (
    <div className='h-auto w-full flex flex-col gap-y-10 m-10'>
      <p className='text-gray-500 text-xl'>DASHBOARD</p>
      <h1 className='font-semibold text-4xl'>Manage Your Data Privacy</h1>
      <div className='border border-black h-full'>
        <p className='ml-3 mt-3 text-xl'>Manage Access</p>
      </div>
      <div className='border border-black h-full'>
        <p className='ml-3 mt-3 text-xl'>Activity</p>
      </div>
    </div>
  )
}

export default Dashboard
