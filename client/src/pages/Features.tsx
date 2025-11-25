export default function Features() {
  const features = [
    {
      icon: '⚡',
      title: 'Khởi tạo tức thì',
      description: 'Máy chủ được tạo và sẵn sàng host đông chỉ trong vòng 30 giây. Không cần chờ đợi, bắt đầu chơi ngay lập tức.'
    },
    {
      icon: '🎧',
      title: 'Hỗ trợ 24/7',
      description: 'Đội ngũ kỹ thuật Việt Nam luôn sẵn sàng hỗ trợ bạn mọi lúc, mọi nơi qua Discord và ticket system.'
    },
    {
      icon: '🛡️',
      title: 'Bảo vệ AntiDDoS Pro',
      description: 'Hệ thống phòng chống tấn công DDoS Layer 4/7 tiên tiến, tích hợp với XDP Filter, vv đảm bảo máy chủ luôn ổn định và an toàn.'
    },
    {
      icon: '📥',
      title: 'Sao lưu không giới hạn',
      description: 'Không giới hạn bản sao lưu, khối phục đề dàng với 1 click. Ấn tâm về dữ liệu của bạn.'
    },
    {
      icon: '🔧',
      title: 'Cài đặt mod 1-click',
      description: 'Thư viện mod và plugin phong phú, cài đặt chỉ với 1 click. Forge, Fabric, Paper plugins đều có sẵn.'
    },
    {
      icon: '💰',
      title: 'Giá cả hợp lý nhất',
      description: 'Mức giá cạnh tranh nhất thị trường Việt Nam. Chất lượng cao nhưng chỉ phí thấp, phù hợp mọi túi tiền.'
    }
  ]

  return (
    <section id="tinh-nang" className="py-20 bg-[#0f1419]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Asaka Cloud có gì?
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Chúng tôi mang đến những ưu điểm vượt trội để đảm bảo trải nghiệm máy chủ tốt nhất cho bạn
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border border-gray-800 hover:border-blue-600 transition bg-gradient-to-br from-[#1a1f2e] to-[#0f1419]">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
