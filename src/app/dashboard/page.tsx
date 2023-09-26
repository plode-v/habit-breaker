import React from 'react'
import Sidebar from '@/components/Sidebar';
import DashboardCenter from '@/components/DashboardCenter';
import DashboardRight from '@/components/DashboardRight';


const Dashboard = () => {

  return (
    <div className='flex min-h-screen w-screen bg-gradient-to-r from-yellow-100 via-pink-50 to-pink-100 justify-center'>
      <div className='w-full 3xl:w-2/3 flex'>
        <Sidebar />
        <DashboardCenter />
        <DashboardRight />
      </div>
    </div>
  )
}

export default Dashboard