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

const contactInfo = {
  phone: '400-123-4567',
  email: 'contact@jijiapin.com',
  address: '上海市浦东新区张江高科技园区',
  workingHours: '周一至周五 9:00-18:00'
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* 顶部横幅 */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center">
        <p className="text-sm">欢迎来到极佳品端 | 专业的智能办公解决方案提供商</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            极佳品端产品展示
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            为您打造智能、高效、舒适的现代办公环境
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

        {/* 联系方式部分 */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">联系我们</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">电话</h3>
              <p className="text-gray-600 mt-2">{contactInfo.phone}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">邮箱</h3>
              <p className="text-gray-600 mt-2">{contactInfo.email}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">地址</h3>
              <p className="text-gray-600 mt-2">{contactInfo.address}</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">工作时间</h3>
              <p className="text-gray-600 mt-2">{contactInfo.workingHours}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}