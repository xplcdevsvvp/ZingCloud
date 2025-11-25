import { useState, useEffect } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0f1419]/98 backdrop-blur-md border-b border-gray-800 shadow-lg' 
        : 'bg-[#0f1419]/95 backdrop-blur-sm border-b border-gray-800'
    }`}>
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 fade-in">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold">∞</span>
          </div>
          <span className="text-lg font-bold hover:text-blue-400 transition-colors duration-300">Zykl</span>
        </div>

        <div className="hidden md:flex gap-8">
          <a href="#dich-vu" className="hover:text-blue-400 transition-colors duration-300 relative group">
            Dịch Vụ
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#tinh-nang" className="hover:text-blue-400 transition-colors duration-300 relative group">
            Tính Năng
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#bang-gia" className="hover:text-blue-400 transition-colors duration-300 relative group">
            Bảng Giá
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#tro-giup" className="hover:text-blue-400 transition-colors duration-300 relative group">
            Hỗ Trợ
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        <button className="hidden md:block px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50 hover:scale-105 transform">
          Đăng Nhập
        </button>

        <button 
          className="md:hidden transition-transform duration-300 hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-[#1a1f2e] border-t border-gray-800 px-4 py-4 animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4 stagger-item">
            <a href="#dich-vu" className="hover:text-blue-400 transition-colors duration-300">Dịch Vụ</a>
            <a href="#tinh-nang" className="hover:text-blue-400 transition-colors duration-300">Tính Năng</a>
            <a href="#bang-gia" className="hover:text-blue-400 transition-colors duration-300">Bảng Giá</a>
            <a href="#tro-giup" className="hover:text-blue-400 transition-colors duration-300">Hỗ Trợ</a>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 w-full hover:shadow-lg">
              Đăng Nhập
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
