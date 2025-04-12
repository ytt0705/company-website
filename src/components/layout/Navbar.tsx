'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">极佳品端</span>
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link 
              href="/" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/')}`}
            >
              首页
            </Link>
            <Link 
              href="/products" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/products')}`}
            >
              产品展示
            </Link>
            <Link 
              href="/contact" 
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/contact')}`}
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}