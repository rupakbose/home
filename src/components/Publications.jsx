import { PUBLICATIONS } from "../constants"
import { motion } from "motion/react"

const Publications = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1}}
        className="my-20 text-center text-4xl">
        Publications
        </motion.h1>
        <div>
            {PUBLICATIONS.map((publication, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1}}
                    className="w-full lg:w-1/4">
                        <img 
                        src = {publication.image}
                        width={200}
                        height={200}
                        alt={publication.title}
                        className="mb-6 rounded"
                        />
                    </motion.div> 
                    <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1}}
                    className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{publication.title}</h6>
                        <p className="mb-4 text-neutral-400">{publication.description}</p>
                        {publication.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm text-purple-400 font-medium"> {tech}</span>
                        ))}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Publications