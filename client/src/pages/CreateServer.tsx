export default function CreateServer() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0f1419] to-[#1a1f2e]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto border-2 border-blue-500 rounded-2xl p-8 md:p-12 bg-gradient-to-r from-[#1a2a4e]/30 to-[#1a1f2e]/30 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 slide-up group">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center group-hover:text-blue-300 transition-colors duration-300">
            Sẵn Sàng Tạo Máy Chủ Game?
          </h2>
          <p className="text-gray-400 text-center mb-8 group-hover:text-gray-300 transition-colors duration-300">
            Khởi tạo máy chủ game của riêng bạn chỉ trong vài phút. Hệ thống tự động lịch hoạt, bảo mật cao và đội ngũ hỗ trợ 24/7 sẵn sàng giúp đỡ khi cần thiết.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-600/50 hover:scale-105 transform">
              <span>Tạo Máy Chủ Ngay</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="px-8 py-3 border border-gray-600 hover:border-blue-400 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:bg-blue-400/10 hover:scale-105 transform">
              <span>🎮</span>
              <span>Tham Gia Discord</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
