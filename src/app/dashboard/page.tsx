import React from 'react'
import Sidebar from '@/components/Sidebar';
import DashboardCenter from '@/components/DashboardCenter';
import DashboardRight from '@/components/DashboardRight';


const Dashboard = () => {

  return (
    <div className='flex min-h-screen h-screen max-w-screen bg-gradient-to-r from-yellow-100 via-pink-50 to-pink-100'>
      <Sidebar />
      <DashboardCenter />
      <DashboardRight />
    </div>
  )
}

export default Dashboard