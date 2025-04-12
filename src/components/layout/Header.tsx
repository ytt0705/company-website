import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      {/* 顶部横幅 */}
      <div className="bg-blue-800 text-white py-3 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">专业工业称重设备制造商</p>
            <p className="text-sm">服务热线：139-0105-2484</p>
          </div>
        </div>
      </div>

      {/* 主导航 */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-800">极佳品端</span>
              <span className="text-gray-600">工业科技</span>
            </Link>

            {/* 导航菜单 */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
              >
                首页
              </Link>
              <Link 
                href="/products" 
                className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
              >
                产品中心
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
              >
                关于我们
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-blue-800 font-medium transition-colors"
              >
                联系我们
              </Link>
            </nav>

            {/* 移动端菜单按钮 */}
            <button className="md:hidden p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 