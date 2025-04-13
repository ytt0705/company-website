"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

export default function HomePage() {
  // 定义轮播图片数组
  const carouselImages = [
    'e640907b5e84a5214d667d0ed88a20e3_副本.JPG',
    'dd8a41a0d1bb74d8d95158073a98e06c_副本.JPG',
    'd774c6cbbf7bc8bd6d02d390f7eb64f7.JPG',
    'ab73158f54ebc4b2b50a20324482b556.JPG',
    '84cde0925b6c991baa437effad970a4e_副本.JPG',
    '7b35d40d9fcfc1d88171f07fed0cff21.JPG',
    '2d73fa9e918b07704f0032f5429eb142_副本.JPG'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // 每5秒切换一次

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  // 手动切换轮播图
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Microsoft YaHei'] flex flex-col">
      {/* 主体内容 */}
      <div className="flex-grow">
        {/* 图片轮播 */}
        <div className="relative h-[600px] overflow-hidden">
          <div 
            className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselImages.map((imageName, index) => (
              <div key={index} className="min-w-full flex-shrink-0">
                <Image
                  src={`/images/carousel/${imageName}`}
                  alt={`轮播图 ${index + 1}`}
                  width={1920}
                  height={1080}
                  className="object-cover w-full h-full"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          {/* 轮播图导航按钮 */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`跳转到第 ${index + 1} 张轮播图`}
              />
            ))}
          </div>

          {/* 左右箭头 */}
          <button
            onClick={() => goToSlide(currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
            aria-label="上一张"
          >
            ←
          </button>
          <button
            onClick={() => goToSlide(currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
            aria-label="下一张"
          >
            →
          </button>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* 产品列表 */}
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">产品展示</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link 
                key={product.id}
                href={`/products/${product.id}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-[#1e3a8a] bg-blue-50 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-[#1e3a8a]">{product.price}</span>
                    <span className="text-[#1e3a8a] font-medium">查看详情 →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
