import Link from 'next/link'

const products = [
  {
    id: 1,
    name: '产品一',
    description: '产品一的详细描述，介绍产品的主要特点和优势。',
    features: ['特点1', '特点2', '特点3'],
    imageUrl: '/placeholder.jpg'
  },
  {
    id: 2,
    name: '产品二',
    description: '产品二的详细描述，介绍产品的主要特点和优势。',
    features: ['特点1', '特点2', '特点3'],
    imageUrl: '/placeholder.jpg'
  },
  {
    id: 3,
    name: '产品三',
    description: '产品三的详细描述，介绍产品的主要特点和优势。',
    features: ['特点1', '特点2', '特点3'],
    imageUrl: '/placeholder.jpg'
  }
]

export default function Products() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
        我们的产品
      </h1>
      
      <div className="grid grid-cols-1 gap-12">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <div className="h-48 w-full md:w-64 bg-gray-200 relative">
                  {/* 这里可以放产品图片 */}
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">产品特点：</h3>
                  <ul className="list-disc list-inside text-gray-600">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  了解更多
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}