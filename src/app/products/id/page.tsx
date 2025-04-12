'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

const products = {
  '1': {
    name: '产品一',
    description: '产品一的详细描述，这里可以添加更多产品信息。',
    features: [
      '特点1：详细说明产品特点',
      '特点2：产品的优势',
      '特点3：产品的应用场景',
    ],
    specifications: [
      '规格1：具体参数',
      '规格2：技术指标',
      '规格3：其他说明',
    ]
  },
  '2': {
    name: '产品二',
    description: '产品二的详细描述，这里可以添加更多产品信息。',
    features: [
      '特点1：详细说明产品特点',
      '特点2：产品的优势',
      '特点3：产品的应用场景',
    ],
    specifications: [
      '规格1：具体参数',
      '规格2：技术指标',
      '规格3：其他说明',
    ]
  },
  '3': {
    name: '产品三',
    description: '产品三的详细描述，这里可以添加更多产品信息。',
    features: [
      '特点1：详细说明产品特点',
      '特点2：产品的优势',
      '特点3：产品的应用场景',
    ],
    specifications: [
      '规格1：具体参数',
      '规格2：技术指标',
      '规格3：其他说明',
    ]
  }
}

export default function ProductDetail() {
  const params = useParams()
  const productId = params.id as string
  const product = products[productId as keyof typeof products]

  if (!product) {
    return <div>产品不存在</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{product.name}</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="h-64 bg-gray-200 relative">
            {/* 这里可以放产品大图 */}
          </div>
          
          <div className="p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">产品介绍</h2>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <h2 className="text-xl font-semibold text-gray-900 mb-4">产品特点</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              {product.features.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
              ))}
            </ul>
            
            <h2 className="text-xl font-semibold text-gray-900 mb-4">产品规格</h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              {product.specifications.map((spec, index) => (
                <li key={index} className="mb-2">{spec}</li>
              ))}
            </ul>
            
            <div className="flex justify-between items-center mt-8">
              <Link
                href="/products"
                className="text-blue-600 hover:text-blue-800"
              >
                ← 返回产品列表
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                咨询详情
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}