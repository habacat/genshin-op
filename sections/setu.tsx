// setu.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import { sectionMediaQueries, sectionTopDivStyles } from '../constants'

const Setu = () => (

<div className={`${sectionTopDivStyles} pt-[100px] xs:pt-[50px] overflow-x-hidden`} id="setu" > <div className={`${sectionMediaQueries} grid grid-cols-3 gap-4`}> {/* Images */} {[...Array(9)].map((_, index) => ( <motion.div key={index} variants={slideIn('bottom', 'spring', 0, 1)} initial="hidden" whileInView="show" className="relative" > <Image src={`https://image.anosu.top/pixiv/direct?r18=1&keyword=genshinimpact&page=${index + 1}`} alt={`Setu ${index + 1}`} width={640} height={800} layout="responsive" className="rounded-2xl" /> </motion.div> ))} </div> </div> )
export default Setu
