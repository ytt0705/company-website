import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部横幅 */}
      <div className="bg-blue-800 text-white py-3 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-sm font-medium">专业工业称重设备制造商</p>
            <p className="text-sm">服务热线：400-123-4567</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
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
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">公司简介</h1>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-96">
              <Image
                src="/images/about/company.jpg"
                alt="公司外观"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                上海机甲品工业科技有限公司成立于2010年，是一家专注于工业称重设备研发、生产和销售的高新技术企业。
                公司拥有先进的生产设备和专业的研发团队，致力于为客户提供高精度、高可靠性的称重解决方案。
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                经过多年发展，公司已形成包括工业台秤、电子天平、叉车秤等多个产品系列，广泛应用于工业生产、仓储物流、
                实验室等领域。我们始终坚持"质量第一、服务至上"的经营理念，努力为客户创造更大的价值。
              </p>
            </div>
          </div>
        </div>

        {/* 发展历程 */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">发展历程</h2>
          <div className="space-y-12">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="text-xl font-bold text-blue-600">2010年</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 mx-4 rounded-full bg-blue-600"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">公司成立</h3>
                <p className="text-gray-600">上海机甲品工业科技有限公司正式成立</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="text-xl font-bold text-blue-600">2012年</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 mx-4 rounded-full bg-blue-600"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">研发突破</h3>
                <p className="text-gray-600">成功研发第一代高精度工业台秤，获得多项专利</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="text-xl font-bold text-blue-600">2015年</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 mx-4 rounded-full bg-blue-600"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">业务扩展</h3>
                <p className="text-gray-600">产品线扩展至电子天平和叉车秤领域，市场份额显著提升</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="text-xl font-bold text-blue-600">2018年</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 mx-4 rounded-full bg-blue-600"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">技术创新</h3>
                <p className="text-gray-600">推出智能物联网称重系统，实现称重数据云端管理</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="text-xl font-bold text-blue-600">2020年</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 mx-4 rounded-full bg-blue-600"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">品质认证</h3>
                <p className="text-gray-600">通过ISO9001质量管理体系认证，产品获得CE、OIML等国际认证</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex-shrink-0 w-32 text-right">
                <span className="text-xl font-bold text-blue-600">2023年</span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 mx-4 rounded-full bg-blue-600"></div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">持续发展</h3>
                <p className="text-gray-600">建成智能化生产基地，年产能突破10000台</p>
              </div>
            </div>
          </div>
        </div>

        {/* 企业文化 */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">企业文化</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">企业使命</h3>
              <p className="text-gray-600 text-center">
                为工业生产提供可靠的称重解决方案，
                推动工业自动化和智能化发展
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-900 mb-4">企业愿景</h3>
              <p className="text-gray-600 text-center">
                成为工业称重领域的领导者，
                打造国际一流的工业称重品牌
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 