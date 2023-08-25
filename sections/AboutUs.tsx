'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Heading, Button, PortfolioDownloader } from '../components/index'
import {
  sectionMediaQueries,
  sectionTopDivStyles,
  aboutTextStyles,
  hoverStyles,
  aboutMoreText,
} from '@/constants'

const AboutUs = () => {
  // States to show the full introduction text
  const [moreLessText, setMoreLessText] = useState('more')
  const [isFullText, setIsFullText] = useState(true)

  // Function to handle the showing and hiding of the full text
  // On lg(1020) or more the full text gets automatically shown
  // On lg(1020) or less the full text is cut in half and a more button appear to show it
  useEffect(() => {
    const handleResize = () => {
      const onLargeRender = window.innerWidth > 1020
      setIsFullText(onLargeRender)
    }
    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleMoreLessOption = () => {
    setMoreLessText((prev) => (prev === 'more' ? 'less' : 'more'))
  }

  return (
    <div className={`mont xs:text-center ${sectionTopDivStyles}`} id="AboutUs">
      <div className={`${sectionMediaQueries}`}>
        <Heading title="ABOUT US" />
        {/* Div for the text */}
        <div className="mt-[50px] flex flex-wrap">
          <div
            className={`${aboutTextStyles} xs:mx-auto w-full lg:w-full text-justify`}
          >
            {/* if client width is < 1020, we show the text cut in half */}
            {/* Image for < lg */}
            {/* {!isFullText && (
              <Image
                // src="/otherImages/setup.jpg"
                // alt="me and my setup"
                width={502}
                height={100}
                className="lg:mr-[10px] sm:mb-[10px] lg:w-1/3 md:w-1/2 sm:w-full object-cover imageBorder float-left hidden lg:block"
              />
            )} */}

            <p>
						  <br></br>【复旦大学原神玩家俱乐部】——探索奇幻世界，畅享游戏乐趣！
						  <br></br><br></br>
						  在这个充满传奇的大陆上，有一支来自复旦大学的勇者团队，他们聚集在一起，共同探索《原神》这个神奇的游戏世界。他们就是复旦大学原神玩家俱乐部！让我们一同揭开这个充满激情和创造力的社团的神秘面纱。
						  <br></br><br></br>
						  复旦大学，这座源自《尚书大传》的名校，始创于1905年，最初名为复旦公学，后于1917年定名为复旦大学，是中国人自主创办的第一所高等院校。学校拥有12个学科门类，涵盖了哲学、经济学、法学、教育学、文学、历史学、理学、工学、医学、管理学、艺术学和交叉学科等广泛领域。复旦大学享有世界一流的办学声誉，在全球大学声誉排名中位居30-60位，是中国大陆的第三名。
						  <br></br><br></br>
						  复旦大学原神玩家俱乐部于2021年6月26日建立，以这个重要的日子为纪念。如今，俱乐部已经拥有892名成员，并以其活跃度和创造力而闻名。在俱乐部的群聊中，玩家们畅所欲言，分享游戏心得，彼此交流着对《原神》的热爱。这个群聊已经达到了5级，成为了大家相互交流的温暖港湾。
						  <br></br><br></br>
						  原神俱乐部为玩家们提供了一个自由发挥的舞台，让他们的想象力和创造力得以充分展现。在群内，学生们还自行搭建了一位备受欢迎的原神机器人——派蒙bot。这个机器人为玩家们提供了丰富的游戏资讯和互动功能，深受广大玩家的喜爱。通过与派蒙bot的互动，玩家们能够更加深入地了解游戏，分享彼此的游戏心得，共同成长。
						  <br></br><br></br>
						  复旦大学原神玩家俱乐部是一个充满活力和激情的社团。在这里，你将遇到志同道合的朋友，一起探索《原神》这个奇幻的游戏世界。无论你是已经沉浸在游戏中的高手，还是刚刚踏入这个世界的新手，俱乐部都欢迎你的加入。在这里，你将发现游戏的乐趣，结交志同道合的伙伴，共同创造属于我们的奇迹！
						  <br></br><br></br>
						  加入复旦大学原神玩家俱乐部，让我们一同踏上冒险之旅，挑战自我，创造精彩！让我们的梦想在这片神奇的大陆上翱翔，让我们的热情点燃游戏的火花！快来加入我们，一起开启属于我们的原神冒险吧！
						  <br></br><br></br>
						  【复旦大学原神玩家俱乐部】——探索奇幻世界，畅享游戏乐趣！<br></br><br></br>
			</p>

            {/* if client width is > 1020, we show the full text uncut */}

            {isFullText && (
              <p className="mt-[10px] lg:hidden">{aboutMoreText}</p>
            )}

            {/* Showing or hiding the full text content with a button */}
            {moreLessText === 'less' && isFullText == false && (
              <>
                <p className={`mt-[10px] lg:block`}>{aboutMoreText}</p>
                {/* <PortfolioDownloader /> */}
              </>
            )}

            {/* Changing the button text depending if the full text is shown or not on < 1020 */}
            {moreLessText === 'more' ? (
              <span
                className={`w-fit hidden lg:inline`}
                onClick={handleMoreLessOption}
              >
                <Button
                  title={moreLessText}
                  overridePadding="px-2 py-1"
                  margin="mt-2"
                  inline
                />
              </span>
            ) : (
              <span
                className={`w-fit hidden lg:inline`}
                onClick={handleMoreLessOption}
              >
                <Button
                  title={moreLessText}
                  overridePadding="px-2 py-1"
                  margin="mt-2"
                  inline
                />
              </span>
            )}
          </div>

          {/* Image for screens > lg */}
          {isFullText && (
            <div className="pl-[40px] my-auto mx-auto w-1/2">
              {/* <Image
                src="/otherImages/setup.jpg"
                alt="me and my setup"
                width={502}
                height={100}
                // mt-[27px] to align the picture center, moving the p tag down
                className="mt-[27px] ml-auto mr-0 w-full object-cover imageBorder"
              /> */}
              <div className="flex flex-wrap justify-end lg:justify-center">
                {/* <PortfolioDownloader /> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
