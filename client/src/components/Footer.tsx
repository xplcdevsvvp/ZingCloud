export default function Footer() {
  return (
    <footer className="bg-[#0a0e14] border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">∞</span>
              </div>
              <span className="text-lg font-bold">Zykl</span>
            </div>
            <p className="text-gray-400 text-sm mb-2">
              Zykl - Dịch vụ máy chủ chuyên nghiệp
            </p>
            <p className="text-gray-500 text-xs">
              © 2024 Zykl Technology<br />
              Cung cấp giải pháp máy chủ uy tín<br />
              Hỗ trợ 24/7 cho mọi khách hàng
            </p>
          </div>

          {/* Dịch Vụ */}
          <div>
            <h4 className="font-bold mb-4">Dịch Vụ</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Gọi Máy chủ Game</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Dedicated Server</a></li>
            </ul>
          </div>

          {/* Điều Hướng */}
          <div>
            <h4 className="font-bold mb-4">Điều Hướng</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Điều khoản</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Client Area</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Game Panel</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Liên Hệ</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Điều Khoản</a></li>
            </ul>
          </div>

          {/* Kết Nối */}
          <div>
            <h4 className="font-bold mb-4">Kết nối với chúng tôi</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0m4.822 18.355c.604-.959 1.028-2.036 1.235-3.161h-2.52c-.369.577-.796 1.121-1.277 1.613.831.414 1.598 1.008 2.322 1.756.46.446.884.935 1.24 1.456zm.24-5.161h2.68c.048-.64.074-1.285.074-1.935s-.026-1.295-.074-1.935h-2.68c.047.64.074 1.285.074 1.935s-.027 1.295-.074 1.935zm-6.062-8.045c-.92 1.059-1.667 2.302-2.127 3.691h2.127V6.149zm0 5.626h-2.127c.46 1.389 1.206 2.632 2.127 3.691v-3.691zm6.062 0v3.691c.92-1.059 1.667-2.302 2.127-3.691h-2.127z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2024 Zykl. All rights reserved.</p>
          <p>Nền tảng dịch vụ máy chủ chuyên nghiệp.</p>
        </div>
      </div>
    </footer>
  )
}
