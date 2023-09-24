import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
return (
    <div className='bg-neutral-50 flex items-center justify-center h-screen w-screen'>
        {children}
    </div>
  )
}

export default layout