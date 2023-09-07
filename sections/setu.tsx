// setu.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import { sectionMediaQueries, sectionTopDivStyles } from '../constants'

const Setu = () => (
  <div
    className={`${sectionTopDivStyles} pt-[100px] xs:pt-[50px]  overflow-x-hidden`}
    id="setu"
  >
    <div className={`${sectionMediaQueries} flex sm:flex-col`}>
      {/* Setu Images */}
      <motion.div
        variants={slideIn('left', 'spring', 0, 1)}
        initial="hidden"
        whileInView="show"
        className="w-1/3 sm:w-full"
      >
        <Image
          src="https://example.com/setu-image-1.jpg"
          alt="Setu Image 1"
          width={409}
          height={614}
          className="drop-shadow-2xl"
        />
      </motion.div>

      <motion.div
        variants={slideIn('left', 'spring', 0, 2)}
        initial="hidden"
        whileInView="show"
        className="w-1/3 sm:w-full"
      >
        <Image
          src="https://example.com/setu-image-2.jpg"
          alt="Setu Image 2"
          width={409}
          height={614}
          className="drop-shadow-2xl"
        />
      </motion.div>

      <motion.div
        variants={slideIn('left', 'spring', 0, 3)}
        initial="hidden"
        whileInView="show"
        className="w-1/3 sm:w-full"
      >
        <Image
          src="https://example.com/setu-image-3.jpg"
          alt="Setu Image 3"
          width={409}
          height={614}
          className="drop-shadow-2xl"
        />
      </motion.div>

      <motion.div
        variants={slideIn('left', 'spring', 0, 4)}
        initial="hidden"
        whileInView="show"
        className="w-1/3 sm:w-full"
      >
        <Image
          src="https://example.com/setu-image-4.jpg"
          alt="Setu Image 4"
          width={409}
          height={614}
          className="drop-shadow-2xl"
        />
      </motion.div>

      <motion.div
        variants={slideIn('left', 'spring', 0, 5)}
        initial="hidden"
        whileInView="show"
        className="w-1/3 sm:w-full"
      >
        <Image
          src="https://example.com/setu-image-5.jpg"
          alt="Setu Image 5"
          width={409}
          height={614}
          className="drop-shadow-2xl"
        />
      </motion.div>

      <motion.div
        variants={slideIn('left', 'spring', 0, 6)}
        initial="hidden"
        whileInView="show"
        className="w-1/3 sm:w-full"
      >
        <Image
          src="https://example.com/setu-image-6.jpg"
          alt="Setu Image 6"
          width={409}
          height={614}
          className="drop-shadow-2xl"
        />
      </motion.div>

      <motion.div
        variants={slideIn('left', 'spring', 0, 7)}
        initial="hidden"
        whileInView="show"
        className="w-1/3 sm:w-full"
      >
        <Image
          src="https://example.com/setu-image-7.jpg"
          alt="Setu Image 7"
          width={409}
          height={614}
          className="drop-shadow-2xl"
        />
      </motion.div>

      <motion.div
        variants={slideIn('left', 'spring', 0, 8)}
        initial="hidden"
        whileInView="show"
        className="w-1/3 sm:w-full"
      >
        <Image
          src="https://example.com/setu-image-8.jpg"
          alt="Setu Image 8"
          width={409}
          height={614}
          className="drop-shadow-2xl"
        />
      </motion.div>

      <motion.div
        variants={slideIn('left', 'spring', 0, 9)}
        initial="hidden"
        whileInView="show"
        className="w-1/3 sm:w-full"
      >
        <Image
          src="https://example.com/setu-image-9.jpg"
          alt="Setu Image 9"
          width={409}
          height={614}
          className="drop-shadow-2xl"
        />
      </motion.div>
    </div>
  </div>
)

export default Setu
