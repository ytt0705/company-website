import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  description: string;
  features: string[];
  imageUrl: string;
  price: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: '智能办公椅',
    description: '人体工学设计，全天候舒适办公。配备智能姿势提醒系统，让您保持健康的坐姿。',
    features: ['自动调节靠背', '记忆海绵座垫', '4D扶手调节', '智能姿势提醒'],
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    price: '¥2,999',
    category: '办公家具'
  },
  {
    id: 2,
    name: '智能音响系统',
    description: '高保真音质，支持多房间联动。内置智能语音助手，让您的生活更加便捷。',
    features: ['360°环绕音效', '智能语音控制', '多房间音频同步', 'Hi-Fi音质'],
    imageUrl: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1',
    price: '¥1,599',
    category: '智能家居'
  },
  {
    id: 3,
    name: '智能办公台灯',
    description: '自动调节亮度，保护视力。支持手机APP控制，可自定义照明场景。',
    features: ['无极调光', '色温可调', 'APP远程控制', '定时开关'],
    imageUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c',
    price: '¥499',
    category: '照明设备'
  }
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            创新产品展示
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            探索我们精心打造的产品系列，为您的工作和生活带来智能化升级体验
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover transform transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-900">{product.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h2>
                <p className="text-gray-600 mb-6 line-clamp-3">{product.description}</p>
                
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/products/${product.id}`}
                  className="inline-flex w-full items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl
                    hover:bg-blue-700 transform transition-all duration-300 hover:scale-[1.02]
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span>了解详情</span>
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
