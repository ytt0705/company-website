import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

export default function ProductsPage() {
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
                <span className="text-gray-900">产品中心</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* 产品列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              href={`/products/${product.id}`} 
              key={product.id}
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
                  <span className="inline-block px-2 py-1 text-sm font-medium text-[#1e3a8a] bg-blue-50 rounded-full">
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