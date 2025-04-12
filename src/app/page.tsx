import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          欢迎来到我们的公司
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          提供专业的产品和优质的服务
        </p>
        <Link
          href="/contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          联系我们
        </Link>
      </section>

      {/* 产品预览 Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          我们的产品
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 示例产品卡片 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 relative">
              {/* 这里可以放产品图片 */}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">产品名称</h3>
              <p className="text-gray-600 mb-4">产品简短描述</p>
              <Link
                href="/products"
                className="text-blue-600 hover:text-blue-800"
              >
                了解更多 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 公司优势 Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            为什么选择我们
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">专业品质</h3>
              <p className="text-gray-600">提供高品质的产品和服务</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">优质服务</h3>
              <p className="text-gray-600">专业的团队为您服务</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">创新解决方案</h3>
              <p className="text-gray-600">为您提供最佳解决方案</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}