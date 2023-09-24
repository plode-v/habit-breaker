import React from 'react'
import { auth, UserButton } from '@clerk/nextjs'


const Dashboard = () => {

    const { userId } = auth();

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard