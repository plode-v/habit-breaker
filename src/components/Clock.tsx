'use client'
import React, { useState, useEffect } from 'react'

const Clock = ({ className }: { className: string }) => {

    const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString())

    useEffect(() => {
        const timeId = setInterval(() => tick(), 1000)

        return () => {
            clearInterval(timeId)
        }

    }, [])

    const tick = () => {
        setCurrentTime(new Date().toLocaleTimeString())
    }

  return (
    <p className={className}>{currentTime}</p>
  )
}

export default Clock