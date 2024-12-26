import React from 'react'
import { SiPytorch } from 'react-icons/si'
import { SiTensorflow } from 'react-icons/si'
import { SiNumpy } from 'react-icons/si'
import { SiSqlite } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'
import { motion } from 'motion/react'
import { inertia } from 'motion'

const iconVariants = (duration) => (
    {
        initial: { y: 10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            }
        }
    }
)

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
    <motion.h1 
    whileInView={{opacity: 1, x: 0}}
    initial={{opacity: 0, x:    -100}}
    transition={{duration: 1.5}}
    className='my-20 text-center text-4xl'>
    Technologies
    </motion.h1>
    <motion.div 
    whileInView={{opacity: 1, x: 0}}
    initial={{opacity: 0, x:    -100}}
    transition={{duration: 1.5}}
    className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiPytorch className='text-7xl text-red-600'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(1)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiTensorflow className='text-7xl text-orange-500'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(1.2)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiNumpy className='text-7xl text-blue-500'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaGitAlt className='text-7xl text-orange-500'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(0.8)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiSqlite className='text-7xl text-blue-300'/>
        </motion.div>
    </motion.div>
    </div>
  )
}

export default Technologies