import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
return (
    <div className='flex items-center justify-center h-screen w-screen bg-gradient-to-r from-yellow-100 via-pink-100 to-pink-50'>
        {children}
    </div>
  )
}

export default layout