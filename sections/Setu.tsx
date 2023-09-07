// setu.tsx
'use client'

// setu.tsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideIn } from '../utils/motion'
import { sectionMediaQueries, sectionTopDivStyles } from '../constants'


const Setu = () => {
  const [images, setImages] = useState<string[]>([]); // 指定初始值为字符串数组

  useEffect(() => {
    // 使用fetch进行GET请求获取图片数据
    fetch('https://image.anosu.top/pixiv/direct?r18=1&keyword=genshinimpact')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length >= 9) {
          // 从响应数据中获取前9张图片的URL
          const imageUrls = data.slice(0, 9);
          setImages(imageUrls);
        }
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div>
      <h1>Setu Images</h1>
      <div className="image-container">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Setu Image ${index + 1}`}
            className="setu-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Setu;
