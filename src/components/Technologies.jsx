import React from 'react'
import { SiPytorch } from 'react-icons/si'
import { SiTensorflow } from 'react-icons/si'
import { SiNumpy } from 'react-icons/si'
import { SiSqlite } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
    <h1 className='my-20 text-center text-4xl'>Technologies</h1>
    <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiPytorch className='text-7xl text-red-600'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiTensorflow className='text-7xl text-orange-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiNumpy className='text-7xl text-blue-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaGitAlt className='text-7xl text-orange-500'/>
        </div>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiSqlite className='text-7xl text-blue-300'/>
        </div>
    </div>
    </div>
  )
}

export default Technologies