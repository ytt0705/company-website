import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
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
                <span className="text-gray-900">关于我们</span>
              </li>
            </ol>
          </nav>
        </div>

        {/* 公司简介 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h1 className="text-3xl font-bold text-[#1e3a8a] mb-6">公司简介</h1>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              技佳品端工业科技有限公司是一家专注于工业称重设备研发、生产和销售的高新技术企业。我们致力于为客户提供精准、可靠的称重解决方案。
            </p>
            <p className="text-gray-700 mb-4">
              公司拥有先进的生产设备和专业的研发团队，产品涵盖工业称重传感器、称重显示仪表、称重控制系统等多个系列。我们的产品广泛应用于工业自动化、物流仓储、农业生产等领域。
            </p>
            <p className="text-gray-700">
              我们秉承"质量第一、服务至上"的经营理念，不断创新和改进，为客户提供更好的产品和服务。欢迎各界朋友前来参观、交流、合作。
            </p>
          </div>
        </div>

        {/* 企业文化 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">企业文化</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">企业使命</h3>
              <p className="text-gray-700">
                为工业生产提供可靠的称重解决方案，推动工业自动化和智能化发展。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">企业愿景</h3>
              <p className="text-gray-700">
                成为工业称重领域的领导者，打造国际一流的工业称重品牌。
              </p>
            </div>
          </div>
        </div>

        {/* 联系方式 */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">联系方式</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">联系我们</h3>
              <p className="text-gray-700 mb-2">电话：13901052484</p>
              <p className="text-gray-700 mb-2">邮箱：arielyinjiatian@gmail.com</p>
              <p className="text-gray-700">地址：上海市浦东新区</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">关注我们</h3>
              <p className="text-gray-700">微信公众号：技佳品端</p>
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