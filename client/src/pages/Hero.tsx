export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1a2a4e] via-[#0f1419] to-[#0f1419] flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Dịch vụ cho thuê máy
            <br />
            chủ <span className="text-blue-500">Game Việt Nam</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Asaka Cloud tự hào là một trong những dịch vụ cho thuê máy chủ tốt 
            nhất tại Việt Nam, cung cấp giải pháp lưu trữ máy chủ trò chơi trực tuyến 
            chất lượng cao với giá cả phải chăng.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
              Tạo máy chủ Game
            </button>
            <button className="px-8 py-3 border border-gray-600 hover:border-gray-400 rounded-lg font-semibold transition">
              Tư vấn ngay về máy chủ
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
