export default function CreateServer() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0f1419] to-[#1a1f2e]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto border-2 border-blue-500 rounded-2xl p-8 md:p-12 bg-gradient-to-r from-[#1a2a4e]/30 to-[#1a1f2e]/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Sẵn Sàng Tạo Máy Chủ Game?
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Khởi tạo máy chủ game của riêng bạn chỉ trong vài phút. Hệ thống tự động lịch hoạt, bảo mật cao và đội ngũ hỗ trợ 24/7 sẵn sàng giúp đỡ khi cần thiết.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition flex items-center justify-center gap-2">
              <span>Tạo Máy Chủ Ngay</span>
              <span>→</span>
            </button>
            <button className="px-8 py-3 border border-gray-600 hover:border-gray-400 rounded-lg font-semibold transition flex items-center justify-center gap-2">
              <span>🎮</span>
              <span>Tham Gia Discord</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
