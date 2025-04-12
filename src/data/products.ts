export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  imageUrl: string;
  features: string[];
  specifications?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "JJP-5000 工业台秤",
    category: "台秤系列",
    description: "高精度工业台秤，适用于工厂、仓库等场所的日常称重需求。采用进口传感器，确保称重精度和稳定性。",
    price: "¥5,999",
    imageUrl: "/images/products/industrial-scale-1.jpg",
    features: [
      "高精度传感器",
      "防水防尘设计",
      "大屏LED显示",
      "多种接口支持",
      "自动校准功能"
    ],
    specifications: [
      "最大称重：5000kg",
      "精度：0.5kg",
      "秤台尺寸：1200×1200mm",
      "显示方式：LED数码管",
      "防护等级：IP65"
    ]
  },
  {
    id: 2,
    name: "JJP-T100 电子天平",
    category: "天平系列",
    description: "实验室级精密电子天平，适用于实验室、珠宝店等需要高精度称重的场所。",
    price: "¥3,999",
    imageUrl: "/images/products/precision-balance-1.jpg",
    features: [
      "0.001g高精度",
      "自动校准",
      "防风罩设计",
      "数据导出功能",
      "过载保护"
    ],
    specifications: [
      "最大称重：100g",
      "精度：0.001g",
      "秤盘尺寸：Φ90mm",
      "显示方式：LCD",
      "响应时间：≤3s"
    ]
  },
  {
    id: 3,
    name: "JJP-FS500 叉车秤",
    category: "叉车秤系列",
    description: "集搬运和称重于一体的叉车秤，提高物流效率，适用于仓储、物流等场所。",
    price: "¥12,999",
    imageUrl: "/images/products/forklift-scale-1.jpg",
    features: [
      "边走边称",
      "无线传输",
      "防震设计",
      "长效电池",
      "超载报警"
    ],
    specifications: [
      "最大称重：500kg",
      "精度：0.1kg",
      "叉长：1150mm",
      "工作时间：≥12小时",
      "防护等级：IP54"
    ]
  }
]; 