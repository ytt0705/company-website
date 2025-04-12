import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/app/products';
import type { Product } from '@/app/products';

interface Props {
  params: {
    id: string;
  };
}

export default function ProductDetail({ params }: Props) {
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">产品未找到</h1>
          <Link 
            href="/products"
            className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
          >
            返回产品列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* 顶部横幅 */}
      <div className="bg-blue-600 text-white py-2 px-4 text-center">
        <p className="text-sm">欢迎来到极佳品端 | 专业的智能办公解决方案提供商</p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* 产品图片 */}
            <div className="md:w-1/2 relative h-[400px]">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-lg font-bold text-gray-900">{product.price}</span>
              </div>
            </div>

            {/* 产品信息 */}
            <div className="md:w-1/2 p-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-50 rounded-full">
                  {product.category}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-8 text-lg">{product.description}</p>

              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">产品特点</h2>
                <div className="space-y-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold
                  hover:bg-blue-700 transform transition-all duration-300 hover:scale-[1.02]
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  立即咨询
                </button>
                <Link
                  href="/products"
                  className="block w-full text-center text-blue-600 px-8 py-4 rounded-xl border-2 border-blue-600
                    hover:bg-blue-50 transition-colors duration-300"
                >
                  返回产品列表
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}