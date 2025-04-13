import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

export default async function Page({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center font-['Microsoft YaHei']">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">产品未找到</h1>
          <Link 
            href="/products"
            className="text-[#1e3a8a] hover:text-blue-800 transition-colors duration-300"
          >
            返回产品列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Microsoft YaHei'] flex flex-col">
      <div className="bg-[#1e3a8a] text-white py-3 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">技佳品端 | 专业工业称重设备制造商</p>
            <p className="text-sm">联系电话：13901052484</p>
          </div>
        </div>
      </div>

      <div className="flex-grow container mx-auto px-4 py-12">
        {/* 面包屑导航 */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">首页</Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
                <Link href="/products" className="text-gray-500 hover:text-gray-700">产品中心</Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-gray-900">{product.name}</span>
              </li>
            </ol>
          </nav>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* 产品图片 */}
            <div className="md:w-1/2 relative h-[500px] bg-gray-100">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* 产品信息 */}
            <div className="md:w-1/2 p-8">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium text-[#1e3a8a] bg-blue-50 rounded-full">
                  {product.category}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-[#1e3a8a]">{product.price}</span>
                <span className="ml-2 text-gray-500">含税价</span>
              </div>
              
              <div className="border-t border-gray-200 py-6">
                <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
              </div>

              <div className="border-t border-gray-200 py-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">产品特点</h2>
                <div className="space-y-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <svg className="w-6 h-6 text-[#1e3a8a] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {product.specifications && (
                <div className="border-t border-gray-200 py-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">技术规格</h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-3">
                      {product.specifications.map((spec, index) => (
                        <div key={index} className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 text-[#1e3a8a] mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4 mt-8">
                <button className="w-full bg-[#1e3a8a] text-white px-8 py-4 rounded-lg font-semibold
                  hover:bg-blue-800 transition-colors duration-300"
                >
                  立即咨询
                </button>
                <Link
                  href="/products"
                  className="block w-full text-center text-[#1e3a8a] px-8 py-4 rounded-lg border-2 border-[#1e3a8a]
                    hover:bg-blue-50 transition-colors duration-300"
                >
                  返回产品列表
                </Link>
              </div>
            </div>
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