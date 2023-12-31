// Top section to hopefully catch your attention

'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import { sectionMediaQueries, sectionTopDivStyles } from '../constants'

const Hero = () => (
  <div
    className={`${sectionTopDivStyles} pt-[100px] xs:pt-[50px]  overflow-x-hidden`}
    id="hero"
  >
    <div className={`${sectionMediaQueries} flex sm:flex-col`}>
      {/* Graduation Pic */}
      <motion.div
        variants={slideIn('left', 'spring', 0, 1)}
        initial="hidden"
        whileInView="show"
        className="w-1/3 sm:w-full"
      >
        <Image
          src="/otherImages/qrcode.png"
          alt="Graduation Pic"
          width={409}
          height={614}
          className="drop-shadow-2xl"
        />
      </motion.div>

      {/* Decorative pictures */}
      <motion.div
        variants={slideIn('right', 'spring', 0, 1)}
        initial="hidden"
        whileInView="show"
        className="w-2/3 sm:w-full"
      >
        {/* Image' */}
        {/* <div className="flex justify-center">
          <Image
            src="/otherImages/headerCodeImage.png"
            alt="Header Code Image"
            width={535}
            height={158}
            className="mt-[33px] sm:mt-0 imageBorder drop-shadow-2xl"
          />
        </div> */}

        {/* Text */}
        <div>
			<p className="ps2p text-[80px] lg:text-[40px] md:text-[30px] sm:text-[25px] text-center leading-none mt-[67px] md:mt-[40px] shadow-2xl">
            旦中洞天
            <br />

            {/* LAZAREV <br /> */}
            <span className="mont text-[30px] xl:text-[50px] lg:text-[40px] md:text-[25px] sm:text-[15px]">
              复旦原神玩家俱乐部
			  <br /></span>
			<span className="mont text-[18px] xl:text-[50px] lg:text-[40px] md:text-[25px] sm:text-[15px]">
			  这里聚集着一大批志同道合的玩家，如果你也喜欢原神，欢迎你的加入~<br />请使用qq扫描左侧的群组二维码加入我们~<br /> 　
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  </div>
)

export default Hero
