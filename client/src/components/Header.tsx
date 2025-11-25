import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-[#0f1419]/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">∞</span>
          </div>
          <span className="text-lg font-bold">Zykl</span>
        </div>

        <div className="hidden md:flex gap-8">
          <a href="#dich-vu" className="hover:text-blue-400 transition">Dịch Vụ</a>
          <a href="#tinh-nang" className="hover:text-blue-400 transition">Tính Năng</a>
          <a href="#bang-gia" className="hover:text-blue-400 transition">Bảng Giá</a>
          <a href="#tro-giup" className="hover:text-blue-400 transition">Hỗ Trợ</a>
        </div>

        <button className="hidden md:block px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
          Đăng Nhập
        </button>

        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-[#1a1f2e] border-t border-gray-800 px-4 py-4">
          <div className="flex flex-col gap-4">
            <a href="#dich-vu" className="hover:text-blue-400 transition">Dịch Vụ</a>
            <a href="#tinh-nang" className="hover:text-blue-400 transition">Tính Năng</a>
            <a href="#bang-gia" className="hover:text-blue-400 transition">Bảng Giá</a>
            <a href="#tro-giup" className="hover:text-blue-400 transition">Hỗ Trợ</a>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition w-full">
              Đăng Nhập
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
