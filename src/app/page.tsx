import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Microsoft YaHei'] flex flex-col">
      {/* 顶部横幅 */}
      <div className="bg-[#1e3a8a] text-white py-3 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">技佳品端 | 专业工业称重设备制造商</p>
            <p className="text-sm">联系电话：13901052484</p>
          </div>
        </div>
      </div>

      {/* 主体内容 */}
      <div className="flex-grow">
        {/* 图片轮播 */}
        <div className="relative h-[600px] overflow-hidden">
          <div className="absolute inset-0 flex">
            {[1, 2, 3, 4, 5].map((num, index) => (
              <Image
                key={num}
                src={`/pic_website_using/pic${num}.jpg`}
                alt={`轮播图 ${num}`}
                width={1920}
                height={1080}
                className="object-cover min-w-full"
                priority={index === 0}
              />
            ))}
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className="w-3 h-3 rounded-full bg-white/50 hover:bg-white/80 transition-colors duration-300"
                aria-label={`跳转到第 ${num} 张轮播图`}
              />
            ))}
          </div>
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
                    <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-600">{product.price}</span>
                    <span className="text-[#1e3a8a] font-medium">查看详情 →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-[#1e3a8a] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">联系我们</h3>
              <p className="mb-2">电话：13901052484</p>
              <p>邮箱：arielyinjiatian@gmail.com</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">公司地址</h3>
              <p>上海市浦东新区</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">关注我们</h3>
              <p>微信公众号：技佳品端</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-blue-700 text-center">
            <p>© 2024 技佳品端工业科技有限公司 版权所有</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
